import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserPointsSchemaa = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  points: {
    type: Number,
    default: 500
  },
});
UserPointsSchemaa.path('userId').index({ unique: true });

export const UserPointsEntity = mongoose.model('UserPoints', UserPointsSchemaa);