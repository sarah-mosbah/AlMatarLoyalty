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
  tarnsferedPoints: {
    type: Number,
  },
  transactionStatus: {type: Number, default: 1}
}, {timestamps: true});
TransfersSchema.index( { createdAt: 1 }, { expireAfterSeconds: 600});
export const TransfersEntity = mongoose.model('Transfers', TransfersSchema);