import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { login } from "@/src/lib/services/auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			async authorize(credentials) {
				return login(credentials)
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		error: "/auth/error",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = (<any>user).accessToken
			}
			return token
		},
		async session({ session, token }) {
			;(<any>session).accessToken = token.accessToken
			return session
		},
	},
})
