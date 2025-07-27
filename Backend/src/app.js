import express from 'express';

import session from 'express-session';
import passport from 'passport';
import initPassport from './config/passport.js';
import authRoutes from './routes/authRoutes.js';

import { configDotenv } from 'dotenv';

configDotenv()

initPassport();
const app = express();

app.use(express.json())
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);


export default app;