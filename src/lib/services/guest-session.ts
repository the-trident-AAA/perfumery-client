"use server"
import { cookies } from "next/headers"

export async function getOrCreateGuestSession(): Promise<string> {
	const cookieStore = await cookies()
	let sessionId = cookieStore.get("guestSession")?.value

	if (!sessionId) {
		sessionId = crypto.randomUUID()
		cookieStore.set("guestSession", sessionId, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 30, // 30 days
		})
	}

	return sessionId
}
