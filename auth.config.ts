import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            // Store the user's profile in the session
            session.user = user;
            return session;
        },
    }
} satisfies NextAuthConfig