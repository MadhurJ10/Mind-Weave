import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

const router = express.Router();


router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                provider: 'manual'
            },
        });

        // Generate JWT
        const token = jwt.sign({ id: newUser.id }, "madhur", { expiresIn: '1d' });

        res.status(201).json({ user: newUser, token });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Manual Login Route
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, 'madhur', { expiresIn: '1d' });
        res.json({ user, token });
    })(req, res, next);
});

// Google Auth Initiation
router.get('/google', passport.authenticate('google', { scope: [ 'profile', 'email' ] }));

// Google OAuth Callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    (req, res) => {
        const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Redirect to your frontend with token
        res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
    }
);

export default router;
