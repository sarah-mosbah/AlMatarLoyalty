import { UserEntity } from "../models/user.model.js";
import mongoose from "mongoose";
export async function createOrUpdateUser(user) {
    try {
    const id = !user._id ? new mongoose.Types.ObjectId(): mongoose.Types.ObjectId(user._id);
    return  await UserEntity.findByIdAndUpdate(id, user, { new: true, upsert: true }).lean();
    } catch (error) {
        throw error;
    }
}