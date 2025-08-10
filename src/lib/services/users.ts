"use server"

import { auth } from "@/src/auth"
import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { User } from "@/src/lib/types/users"

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
