import * as userService from '../../services/user.service.js';
export async function createOrUpdateUser(req, res) {
    try {
        const user = req.body;
        const addedUser = await userService.createOrUpdateUser(user);
        return res.status(200).json(addedUser);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
       
}
