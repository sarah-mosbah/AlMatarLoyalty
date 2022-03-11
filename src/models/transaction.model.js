import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  transfererId: {
    type: String,
    required: true
  },
  recieverId: {
    type: String,
    required: true
  },
  tarnsferedPoints: {
    type: Number,
  },
});
export const TransactionEntity = mongoose.model('Transactions', TransactionSchema);