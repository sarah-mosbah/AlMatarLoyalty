import * as transactionsHandler from '../handlers/transfer.handler.js';
import {authorization} from '../../middleware/auth.middleware.js';
import express from "express";
export const router = express.Router();

router.post('', authorization, transactionsHandler.transferPoints);
router.post('/:transferId', authorization, transactionsHandler.confirmPointsTransefer);
