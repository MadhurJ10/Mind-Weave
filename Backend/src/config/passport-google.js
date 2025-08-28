import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../lib/prisma.js';


export function setupGoogle(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[ 0 ].value;

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: profile.displayName,
          provider: "google",        // ✅ schema field
          providerId: profile.id,    // ✅ schema field
          image: profile.photos?.[ 0 ]?.value || null, // optional
        },
      });

    }

    return done(null, user);
  }));
}
