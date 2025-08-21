import express from 'express';

import session from 'express-session';
import passport from 'passport';
import initPassport from './config/passport.js';
import authRoutes from './routes/authRoutes.js';
import mapCreateRoutes from './routes/mapCreate.routes.js'
import askAiRoute from './routes/askAi.route.js'

import cors from 'cors'

import { configDotenv } from 'dotenv';

configDotenv()

initPassport();
const app = express();
app.use(cors());

app.use(express.json())
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/map', mapCreateRoutes);
app.use('/ai', askAiRoute);



export default app;