import * as userRepository from '../repostories/user.repository.js';

export  async function createOrUpdateUser(user) {
    try {
    return await userRepository.createOrUpdateUser(user);
    } catch (error) {
        throw error;
    }

}
