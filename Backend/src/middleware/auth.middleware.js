import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET

export default async function authMid(req, res, next) {
    
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ error: 'Token missing' });

    const token = authHeader
    if (!token) return res.status(401).json({ error: 'Token missing' });

    try {
        const Check = jwt.verify(token, JWT_SECRET);
        req.userId = Check.id
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

