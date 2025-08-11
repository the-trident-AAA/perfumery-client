"use server"

import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import { createFormDataBody } from "@/src/lib/request-body"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { User, UserEditDTO } from "@/src/lib/types/users"

export async function getUserById(id: string) {
	const session = await auth()
	const res = await fetch(
		apiRoutes.users.getByIdWithoutRelations.replace(":id", id),
		{
			method: "GET",
			headers: {
				Authorization: "Bearer " + session?.accessToken,
			},
			next: { tags: [tagsCacheByRoutes.users.singleTag + ": " + id] },
		},
	)

	return await buildApiResponse<User>(res)
}

export async function getUserProfile() {
	const session = await auth()
	const res = await fetch(
		apiRoutes.users.getByIdWithoutRelations.replace(
			":id",
			session?.user.id as string,
		),
		{
			method: "GET",
			headers: {
				Authorization: "Bearer " + session?.accessToken,
			},
			next: {
				tags: [
					(tagsCacheByRoutes.users.singleTag +
						": " +
						session?.user.id) as string,
				],
			},
		},
	)

	return await buildApiResponse<User>(res)
}

export async function editUser(
	id: string,
	userEditDTO: UserEditDTO,
	formData: FormData,
) {
	const session = await auth()
	const res = await fetch(apiRoutes.users.edit.replace(":id", id), {
		method: "PATCH",
		headers: {
			Authorization: "Bearer " + session?.accessToken,
		},
		body: createFormDataBody({
			...userEditDTO,
			avatar: formData.get("avatar"),
		}),
	})

	return await buildApiResponse<User>(res)
}
