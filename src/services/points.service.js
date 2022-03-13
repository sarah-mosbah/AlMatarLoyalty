import * as userPointsRepository from '../repostories/points.repository.js';
export  async function createUserPoints(userId) {
    try {
    return await userPointsRepository.createNewUserPoints(userId);
    } catch (error) {
        throw error;
    }
}