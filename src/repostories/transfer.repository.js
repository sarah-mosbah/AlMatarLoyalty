import { TransfersEntity } from "../models/transfer.model.js"


export async function initTransfer(transfer) {
    try {
       return await TransfersEntity.create(transfer);
    } catch (error) {
        throw error;
    }
}

export async function updateTransfere(transferId, tranactionStatus) {
    try {
       return await TransfersEntity.findByIdAndUpdate(transferId, {$set: {tranactionStatus}});
    } catch (error) {
        throw error;
    }
}

export async function deleteTransfere(transferId) {
    try {
       return await TransfersEntity.findByIdAndRemove(transferId);
    } catch (error) {
        throw error;
    }
}