import connectDB from '@/libs/mongodb';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server'; 

export async function POST(req) {
  try {
    const {
      studentName,
      age,
      Class,
      disability,
      aadharCardNo,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      familyMonthlyIncome,
      mobileNo,
      address,
      schoolHistory,
      medicalHistory,
      otherInformation,
      email,
      password,
    } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDB(); // Ensure correct function call

    const newUser = await User.create({
      studentName,
      age,
      Class,
      disability,
      aadharCardNo,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      familyMonthlyIncome,
      mobileNo,
      address,
      schoolHistory,
      medicalHistory,
      otherInformation,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);

    return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
  }
}
