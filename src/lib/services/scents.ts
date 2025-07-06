"use server"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { IQueryable } from "@/src/lib/types/request"
import { Scent } from "@/src/lib/types/scents"

export async function getScentsList(params: IQueryable) {
	const url = new QueryParamsURLFactory(params, apiRoutes.scents.get).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.scents.multipleTag] },
	})

	return await buildApiResponse<Scent[]>(res)
}
