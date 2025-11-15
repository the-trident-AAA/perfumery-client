import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { login, loginWithGoogle } from "@/src/lib/services/auth"
import type { JWT } from "next-auth/jwt"
interface CredentialsType {
	username: string
	password: string
}

const isProduction = process.env.AUTH_MODE === "prod"
const useSecureCookies = isProduction
const cookiePrefix = useSecureCookies ? "__Secure-" : ""

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		maxAge: 12 * 60 * 60, // 12h
	},

	providers: [
		/**
		 * -------------------------------------------
		 * LOGIN NORMAL CON CREDENCIALES
		 * -------------------------------------------
		 */
		Credentials({
			credentials: {
				username: { label: "Username", type: "string" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				const { username, password } = credentials as CredentialsType
				const res = await login({ username, password })

				if (!res.response || res.error) return null
				const u = res.response

				return {
					id: u.id,
					username: u.username,
					email: u.email,
					accessToken: u.accessToken,
					shopCartId: u.shopCartId,
				}
			},
		}),

		/**
		 * -------------------------------------------
		 * LOGIN CON GOOGLE
		 * -------------------------------------------
		 */
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	pages: {
		signIn: "/sign-in",
		error: "/error",
	},

	callbacks: {
		/**
		 * ------------------ SIGN IN ------------------
		 * Aquí obtenemos el id_token de Google
		 * y llamamos a tu API propia.
		 */
		async signIn({ account }) {
			if (account?.provider === "google") {
				const googleToken = account.id_token
				// Llamar a tu API Nest
				const res = await loginWithGoogle(googleToken as string)

				if (!res.response || res.error)
					return false

					// Guardamos temporalmente la info en el account
				;(account as any).backendUser = res.response

				// Guardamos temporalmente la info en el account
				//;(account as any).backendUser = {id}
			}

			return true
		},

		/**
		 * ------------------ JWT ------------------
		 * Transferimos info hacia el JWT donde sí es persistente.
		 */
		async jwt({ token, user, account }) {
			// Login normal con credenciales
			if (user) {
				token.id = user.id
				token.username = user.username
				token.email = user.email as string
				token.accessToken = user.accessToken
				token.shopCartId = user.shopCartId
			}

			// Login con Google → viene desde signIn()
			if (account && (account as any).backendUser) {
				const u = (account as any).backendUser
				token.id = u.id
				token.username = u.username
				token.email = u.email
				token.accessToken = u.accessToken
				token.shopCartId = u.shopCartId
			}

			return token
		},

		/**
		 * ------------------ SESSION ------------------
		 * Lo que devuelvas aquí es visible para tu app cliente.
		 */
		async session({ session, token }) {
			const t = token as JWT

			session.accessToken = t.accessToken ?? undefined

			session.user = {
				...session.user, // <--- FIX AQUÍ
				id: t.id!,
				username: t.username!,
				email: t.email!,
				shopCartId: t.shopCartId!,
			}

			return session
		},
	},

	trustHost: !isProduction,

	cookies: {
		sessionToken: {
			name: `${cookiePrefix}next-auth.session-token-shop`,
			options: {
				httpOnly: true,
				sameSite: "lax",
				path: "/",
				secure: useSecureCookies,
				domain: process.env.NEXTAUTH_COOKIE_DOMAIN || undefined,
			},
		},
	},
})
