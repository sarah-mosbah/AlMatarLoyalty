import * as transferService from '../../services/transfer.service.js' 
import * as userService from '../../services/user.service.js';
import * as userPointsService from '../../services/userPoints.service.js';
import * as emailService from '../../services/email.service.js';
import { getPayload } from '../../utils/jwt.utils.js';
import { expired, confirmed} from '../../utils/transferStatus.utils.js';
import moment from 'moment';
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
        await emailService.sendEmail(reciever.email, pointsToTransfer.points);
        return res.status(200).json(transfere);
    } catch (error) {
        if(transfere) {
            await transferService.deleteTransfere(transfere._id);
        }
        return res.status(500).json({message: error.message});
    }
       
}

export async function confirmPointsTransefer(req, res) {
    try {
        const token = req.headers['authorization'].split('Bearer ')[1];
        const userId = getPayload(token).userId;
        const transferId = req.params.transferId;
        const transfer = await transferService.getTransferById(transferId);
        if(!transfer) {
            return res.status(404).json({message: 'Transfer Not Found'});
        }
        if(transfer.transactionStatus === confirmed) {
            return res.status(200).json({message: 'Transfere Already Succeeded'});
        }
        if(transfer.transfererId !== userId) {
            return res.status(401).json({message: 'User Confirming Another User Transfer'});
        }
        const expirationTime = moment(transfer.createdAt).add(10, 'minutes').toDate();
        if(expirationTime < new Date()) {
            await transferService.updateTransfere(transferId, expired)
            return res.status(401).json({message: "Transfere Expired"});
        }
        const user = await userPointsService.getUserPoints(userId);
        if(user.points < transfer.points) {
            return res.status(400).json({message: "User doesnt have enough points"});
        }
        const transfere = await transferService.confirmTransaction(transfer.recieverId, userId, transfer.points, transfer._id);
        return res.status(200).json(transfere);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }  
}

