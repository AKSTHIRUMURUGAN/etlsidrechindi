import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  studentName: { type: String, required: true },
  age: { type: Number, required: true },
  Class: { type: String, required: true },
  disability: { type: String },
  aadharCardNo: { type: String, required: true, unique: true },
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, default: 'Unknown' }, // Default if not provided
  motherName: { type: String, required: true },
  motherOccupation: { type: String, default: 'Unknown' }, // Default if not provided
  familyMonthlyIncome: { type: Number, required: true },
  mobileNo: { type: String, required: true },
  address: { type: String, required: true },
  schoolHistory: { type: String, default: '' }, // Default empty
  medicalHistory: { type: String, default: '' }, // Default empty
  otherInformation: { type: String, default: '' }, // Default empty
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // In production, use a hashed password

    score: { type: Number, default: 0 },


  percentage: {
    type: Number,
    default: 0, 
  },
}, {
  timestamps: true, 
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
