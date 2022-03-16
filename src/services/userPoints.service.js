import * as userPointsRepository from '../repostories/userPoints.repository.js';
export  async function createUserPoints(userId) {
    try {
    return await userPointsRepository.createNewUserPoints(userId);
    } catch (error) {
        throw error;
    }
}

export async function getUserPoints(userId) {
    try {
        return await userPointsRepository.getUserPoints(userId);
    } catch (error) {
        throw error;
    }
}
