import { ForgotPassword } from "@/src/sections/forgot-password/form/schemas/forgot-password-schema"
import { Register } from "@/src/sections/registration/form/schemas/register-schema"
import { Credentials } from "@/src/sections/sign-in/form/schemas/credentials-schema"
import { ChangePassword } from "@/src/sections/users/form/profile/components/change-password-mode-form/schemas/change-password-schema"

export interface CredentialsDTO {
	username: string
	password: string
}

export interface ChangePasswordDTO {
	currentPassword: string
	newPassword: string
}

export interface ForgotPasswordDTO {
	userId: string
	otp: string
	newPassword: string
}

export interface RegisterDTO {
	username: string
	email: string
	password: string
}

export const convertRegisterDTO = (register: Register): RegisterDTO => {
	return {
		email: register.email,
		password: register.password,
		username: register.username,
	}
}

export const convertCredentialsDTO = (
	credentials: Credentials,
): CredentialsDTO => {
	return {
		...credentials,
		username: credentials.firstCredential,
	}
}

export const convertChangePasswordDTO = (
	changePassword: Omit<ChangePassword, "confirmPassword">,
): ChangePasswordDTO => {
	return {
		...changePassword,
	}
}

export const convertForgotPasswordDTO = (
	forgotPassword: Omit<ForgotPassword, "confirmPassword">,
	userId: string,
	otp: string,
): ForgotPasswordDTO => {
	return {
		...forgotPassword,
		userId,
		otp,
	}
}
