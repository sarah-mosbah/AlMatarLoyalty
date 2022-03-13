import * as transferService from '../../services/transfer.service.js' 
import * as userService from '../../services/user.service.js';
import * as emailService from '../../services/email.service.js';
import { getPayload } from '../../utils/jwt.utils.js';
export async function transferPoints(req, res) {
    let transfere;
    try {
        const token = req.headers['authorization'].split('Bearer ')[1];
        const transfererId = getPayload(token).userId;
        const pointsToTransfer = req.body;
        const reciever = await userService.getUserById(req.body.recieverId);
        if(!reciever) {
            return res.status(404).json({message: 'This receiver user doesnt exis'});
        }
        transfere = await transferService.initTransfer({...pointsToTransfer, transfererId: transfererId});
        await emailService.sendEmail(reciever.email, transfere._id);
        return res.status(200).json(transfere);
    } catch (error) {
        if(transfere) {
            await transferService.deleteTransfere(transfere._id);
        }
        return res.status(500).json({message: error.message});
    }
       
}