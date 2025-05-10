"use server"

import { NEXT_PUBLIC_API_URL } from "@/src/config/env-server"
import { Credentials, credentialsSchema } from "@/src/lib/types/auth"

export async function login(data: Credentials): Promise<any> {
	const credentials = credentialsSchema.parse(data)
	const res = await fetch(NEXT_PUBLIC_API_URL + "/auth/sign-in", {
		method: "POST",
		body: JSON.stringify(credentials),
	})
	return res.json()
}
