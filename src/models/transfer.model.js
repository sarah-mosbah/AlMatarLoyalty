import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TransfersSchema = new Schema({
  transfererId: {
    type: String,
    required: true
  },
  recieverId: {
    type: String,
    required: true
  },
  points: {
    type: Number,
  },
  transactionStatus: {type: Number, default: 1}
}, {timestamps: true});

export const TransfersEntity = mongoose.model('Transfers', TransfersSchema);