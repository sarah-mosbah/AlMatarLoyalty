import * as transactionsHandler from '../handlers/transfer.handler.js';
import {authorization} from '../../middleware/auth.middleware.js';
import {transferValidator} from '../../middleware/transactionRoutes.validators.js';
import express from "express";
export const router = express.Router();

router.post('', authorization, transferValidator, transactionsHandler.transferPoints);
router.post('/:transferId/confirm', authorization, transactionsHandler.confirmPointsTransefer);
