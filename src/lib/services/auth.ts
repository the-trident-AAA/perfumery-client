"use server"

import { API_URL } from "@/src/config/env-server"
import { Credentials, credentialsSchema } from "@/src/lib/types/auth"

export async function login(data: Credentials): Promise<any> {
	const credentials = credentialsSchema.parse(data)
	const res = await fetch(API_URL + "/auth/sign-in", {
		method: "POST",
		body: JSON.stringify(credentials),
	})
	return res.json()
}
