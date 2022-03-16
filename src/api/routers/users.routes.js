import * as userHandlers from './../handlers/users.handlers.js';
import express from "express";
import {authorization} from '../../middleware/auth.middleware.js';
export const router = express.Router();

router.post('/signup', userHandlers.createUser);
router.post('/signIn', userHandlers.signIn);
router.post('/points', authorization, userHandlers.getUserPoints);

