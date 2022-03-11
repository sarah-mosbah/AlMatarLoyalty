import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [
      true, 'Username is required.'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [
        true, 'Password is required.'
      ],
  },
  username: {
    type: String,
    required: [
        true, 'Password is required.'
    ],
    unique: true
  },
});
export const UserEntity = mongoose.model('User', UserSchema);