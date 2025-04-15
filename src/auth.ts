import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { login } from "@/src/lib/services/auth"

interface CredentialsType {
	email: string
	password: string
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const { email, password } = credentials as CredentialsType
				return login({ email, password })
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
				token.accessToken = (user as any).accessToken
			}
			return token
		},
		async session({ session, token }) {
			;(session as any).accessToken = token.accessToken
			return session
		},
	},
})
