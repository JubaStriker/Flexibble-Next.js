import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "754299341531-dj3rcsr96q3v3f0s2j32dprikcce4sfm.apps.googleusercontent.com",
            clientSecret: "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",
        })
    ],
    // jwt: {
    //     encode: ({ secret, token }) => {

    //     },
    //     decode: async ({ secret, token }) => {

    //     }
    // },
    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ user }: { user: AdapterUser | User }) {
            try {
                return true;
            }
            catch (err: any) {
                console.log("Error", err);
                return false;
            }
        }
    }
}


