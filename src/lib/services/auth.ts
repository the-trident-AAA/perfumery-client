"use server"
import { auth, signIn as signInAuth, signOut as signOutAuth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { apiRoutes } from "@/src/lib/routes/api-routes/api-routes"
import {
	ChangePasswordDTO,
	CredentialsDTO,
	ForgotPasswordDTO,
	RegisterDTO,
} from "@/src/lib/types/auth"
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

export async function register(registerDTO: RegisterDTO) {
	const res = await fetch(apiRoutes.auth.register, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(registerDTO),
	})

	return await buildApiResponse<User>(res)
}

export async function changePasswordUser(changePasswordDTO: ChangePasswordDTO) {
	const session = await auth()
	const res = await fetch(
		apiRoutes.auth.changePasswordUser.replace(
			":id",
			session?.user.id as string,
		),
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

export async function sendOtp(userId: string) {
	const res = await fetch(apiRoutes.auth.sendOtp, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ userId }),
	})

	return await buildApiResponse<{ message: string }>(res)
}

export async function verifyOtp(userId: string, otp: string) {
	const res = await fetch(apiRoutes.auth.verifyOtp, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ userId, otp }),
	})

	return await buildApiResponse<{ valid: boolean; message: string }>(res)
}

export async function checkOtp(userId: string, otp: string) {
	const res = await fetch(apiRoutes.auth.checkOtp, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ userId, otp }),
	})

	return await buildApiResponse<{ valid: boolean; message: string }>(res)
}

export async function resetPassword(forgotPasswordDTO: ForgotPasswordDTO) {
	const res = await fetch(apiRoutes.auth.resetPassword, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(forgotPasswordDTO),
	})

	return await buildApiResponse<{ message: string }>(res)
}
