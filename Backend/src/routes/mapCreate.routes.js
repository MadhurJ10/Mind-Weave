import express from 'express';
import authMid from '../middleware/auth.middleware.js';
import { mapCreate, mapIntro, mapSave  } from '../controller/mapCreate.controller.js';


const router = express.Router()

router.post('/create', authMid, mapCreate)
router.post('/intro', authMid, mapIntro)
router.post('/save', authMid, mapSave)



export default router;