import express from 'express';
import authMid from '../middleware/auth.middleware.js';
import { mapCreate, mapIntro  } from '../controller/mapCreate.controller.js';


const router = express.Router()

router.post('/create', authMid, mapCreate)
router.post('/intro', authMid, mapIntro)



export default router;