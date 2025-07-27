import passport from 'passport';
import { setupLocal } from './passport-local.js';
import { setupGoogle } from './passport-google.js';
import prisma from '../lib/prisma.js';

export default function initPassport() {
  setupLocal(passport);
  setupGoogle(passport);

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  });
}
