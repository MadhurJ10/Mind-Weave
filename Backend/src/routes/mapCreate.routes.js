import express from 'express';
import authMid from '../middleware/auth.middleware.js';
import { mapCreate } from '../controller/mapCreate.controller.js';

const router = express.Router()

router.post('/create', authMid, mapCreate)


export default router;