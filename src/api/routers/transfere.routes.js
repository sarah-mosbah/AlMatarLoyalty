import * as transactionsHandler from '../handlers/transfer.handler.js';
import express from "express";
export const router = express.Router();

router.post('', transactionsHandler.transferPoints);
