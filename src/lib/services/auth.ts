"use server"

import { signIn as signInAuth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { apiRoutes } from "@/src/lib/routes/api-routes/api-routes"
import { CredentialsDTO } from "@/src/lib/types/auth"
import { User } from "next-auth"

export async function login(credentials: CredentialsDTO) {
	const res = await fetch(apiRoutes.auth.login, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(credentials),
	})
	return buildApiResponse<User>(res)
}

export async function signIn(credentials: CredentialsDTO) {
	return signInAuth("credentials", {
		username: credentials.username,
		password: credentials.password,
		redirect: false,
	})
}
