import express from 'express';
import authMid from '../middleware/auth.middleware.js';
import { mapCreate, mapIntro, mapSave , mapGet  } from '../controller/mapCreate.controller.js';


const router = express.Router()

router.post('/create', authMid, mapCreate)
router.post('/intro', authMid, mapIntro)
router.post('/save', authMid, mapSave)
router.post('/get', authMid, mapGet)



export default router;