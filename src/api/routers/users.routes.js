import * as userHandlers from './../handlers/users.handlers.js';
import express from "express";
export const router = express.Router();

router.post('/', userHandlers.createOrUpdateUser);
