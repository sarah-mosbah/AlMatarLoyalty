import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserPointsSchema = new Schema({
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
UserPointsSchema.path('userId').index({ unique: true });

export const UserPointsEntity = mongoose.model('UserPoints', UserPointsSchema);