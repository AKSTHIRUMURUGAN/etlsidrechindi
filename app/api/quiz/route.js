import connectToDatabase from '@/libs/mongodb';
import User from '@/models/user';

// import { verifyToken } from '@/libs/jwt';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    // Connect to the database
    await connectToDatabase();

 

    const {userId,score } = await req.json();

    if (typeof score !== 'number' || score < 0) {
      return NextResponse.json({ error: 'Invalid score provided' }, { status: 400 });
    }

    // Fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Update the user's score and calculate new percentage
    user.score = score; // Add the new score to the existing total
    user.percentage = (score/ 234) * 100; // Example calculation for percentage

    await user.save(); // Save the changes to the database

    return NextResponse.json({ message: 'Score and percentage updated successfully', user }, { status: 200 });
  } catch (error) {
    console.error('Error updating score and percentage:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
