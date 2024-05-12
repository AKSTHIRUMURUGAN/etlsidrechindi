
import User from '../../../models/user';
import bcrypt from 'bcrypt';
// import { createToken } from '@/libs/jwt';
import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';




export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }



    const response = NextResponse.json({ message: 'Signin successful',user}, { status: 200 });


    return response;
  } catch (error) {
    console.error('Error during signin:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
