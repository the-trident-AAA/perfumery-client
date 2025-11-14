import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
	interface Session {
		accessToken?: string
		user: {
			id: string
			username: string
			email: string
			shopCartId: string
		} & DefaultSession["user"]
	}

	interface User {
		id: string
		username: string
		email: string
		accessToken: string
		shopCartId: string
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id?: string
		username?: string
		email?: string
		accessToken?: string
		shopCartId?: string
		backendUser?: {
			id: string
			username: string
			email: string
			accessToken: string
			shopCartId: string
		}
	}
}
