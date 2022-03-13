import { UserPointsEntity } from "../models/point.model.js";


export async function createNewUserPoints(userId) {
    try {
       return await UserPointsEntity.create({userId});
    } catch (error) {
        throw error;
    }
}