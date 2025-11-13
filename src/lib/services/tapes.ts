"use server"

import { buildApiResponse } from "@/src/lib/api"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { Tape } from "@/src/lib/types/tapes"

export async function getMainTape() {
	const res = await fetch(apiRoutes.tapes.getMainTape, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.tapes.singleTag] },
	})

	return await buildApiResponse<Tape>(res)
}
