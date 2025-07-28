import express from 'express';
import { registerUser, loginUser, googleInit, googleCallback } from '../controller/auth.controller.js';
import authMid from '../middleware/auth.middleware.js';

const router = express.Router();

// Manual Auth
router.post('/register', registerUser);
router.post('/login', loginUser);

// Google OAuth
router.get('/google', googleInit);
router.get('/google/callback', googleCallback);

router.get('/check', authMid , (req ,res)=>{
    console.log(req.userId)
    res.json({
        msg:'auth workss'
    })
} )

export default router;
