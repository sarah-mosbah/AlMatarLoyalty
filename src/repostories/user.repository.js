import { UserEntity } from "../models/user.model.js";
export async function createUser(user) {
    try {
         return await UserEntity.create(user);
    } catch (error) {
        throw error;
    }
}

export async function getUser(email) {
    try {
         return await UserEntity.findOne({email}).lean();
    } catch (error) {
        throw error;
    }
}


// TODO: 
// AUTH MIDDLEWARE
// nodemailer send user email --> transfer {userId from decoded token, transfererId: body, points: 500}, status --> pending, done
// expirationTime as onetime url for transfer 
// Once User Confirmed --> transaction (decrement user points, increment user points, change status)