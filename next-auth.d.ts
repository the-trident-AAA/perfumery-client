import NextAuth from "next-auth"

declare module "next-auth" {
	interface User {
		accessToken: string
		id: string
		username?: string
		email?: string
		shopCartId?: string
	}

	interface Session {
		accessToken: string
		user: User
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken: string
	}
}
