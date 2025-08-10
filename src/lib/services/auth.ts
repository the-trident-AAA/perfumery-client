"use server"
import { auth, signIn as signInAuth, signOut as signOutAuth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { apiRoutes } from "@/src/lib/routes/api-routes/api-routes"
import { ChangePasswordDTO, CredentialsDTO } from "@/src/lib/types/auth"
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

export async function signOut() {
	return signOutAuth({ redirect: false })
}

export async function changePasswordUser(
	id: string,
	changePasswordDTO: ChangePasswordDTO,
) {
	const session = await auth()
	const res = await fetch(
		apiRoutes.auth.changePasswordUser.replace(":id", id),
		{
			method: "POST",
			headers: {
				Authorization: "Bearer " + session?.accessToken,
				"content-type": "application/json",
			},
			body: JSON.stringify(changePasswordDTO),
		},
	)

	return await buildApiResponse<User>(res)
}
