import { UserEdit } from "@/src/sections/users/form/edit/schemas/edit-user-schema"

export interface User {
	id: string
	username: string
	avatar?: string
	email: string
	role: string
	hasPassword: boolean
}

export interface UserEditDTO {
	username: string
}

export const convertUserEditDTO = (
	userEdit: Omit<UserEdit, "avatar">,
): UserEditDTO => {
	return {
		...userEdit,
	}
}
