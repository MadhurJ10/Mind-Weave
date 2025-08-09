import express from 'express';
import authMid from '../middleware/auth.middleware.js';
import { askAi } from '../controller/askAi.controller.js';

const router = express.Router()

router.post('/askai/:word' , authMid , askAi)

export default router;