import * as transferRepository from '../repostories/transfer.repository.js';


export  async function getTransferById(transferId) {
    try {
        return await transferRepository.getTransferById(transferId);
    } catch (error) {
        throw error;
    }
}
export  async function initTransfer(transfer) {
    try {
        return await transferRepository.initTransfer(transfer);
    } catch (error) {
        throw error;
    }
}
export  async function updateTransfere(transferId, status) {
    try {
        return await transferRepository.updateTransfere(transferId, status);
    } catch (error) {
        throw error;
    }
}
export  async function deleteTransfere(transferId) {
    try {
        return await transferRepository.deleteTransfere(transferId);
    } catch (error) {
        throw error;
    }
}

export async function confirmTransaction(receiverId, transfererId, points, transferId) {
    try {
        return await transferRepository.confirmTransaction(receiverId, transfererId, points, transferId);
    } catch (error) {
        throw error;
    }
}