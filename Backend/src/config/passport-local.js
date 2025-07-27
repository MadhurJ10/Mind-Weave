import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export function setupLocal(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return done(null, false, { message: 'No user found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return done(null, false, { message: 'Wrong password' });

    return done(null, user);
  }));
}
