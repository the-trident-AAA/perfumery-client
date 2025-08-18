"use server"
import { JWTPayload, SignJWT, jwtVerify } from "jose"

const secret = new TextEncoder().encode(process.env.AUTH_SECRET!)

export async function generateToken<T extends JWTPayload>(
	payload: T,
	expiresIn: string = "10m",
) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime(expiresIn)
		.sign(secret)
}

export async function verifyToken<T = any>(token: string): Promise<T | null> {
	try {
		const { payload } = await jwtVerify(token, secret)
		return payload as T
	} catch {
		return null
	}
}
