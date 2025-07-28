import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET;

// Utility: Generate token
const generateToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });

// Utility: Remove password before sending response
const sanitizeUser = (user) => {
    const { password, ...safeUser } = user;
    return safeUser;
};

// 📌 REGISTER (Manual)
export const registerUser = async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    try {
        // Check if user exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                provider: 'manual'
            }
        });

        const token = generateToken(newUser.id);
        res.status(201).json({ user: sanitizeUser(newUser), token });

    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// 📌 LOGIN (Manual)
export const loginUser = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user.id);
        res.json({ user: sanitizeUser(user), token });
    })(req, res, next);
};

// 📌 INITIATE GOOGLE LOGIN
export const googleInit = passport.authenticate('google', { scope: [ 'profile', 'email' ] });

// 📌 GOOGLE CALLBACK
export const googleCallback = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/login', session: false }, (err, user) => {
        if (err || !user) {
            return res.redirect('http://localhost:5173/login?error=auth_failed');
        }

        const token = generateToken(user.id);
        res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
    })(req, res, next);
};
