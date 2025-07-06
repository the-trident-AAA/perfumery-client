"use server"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { Brand } from "@/src/lib/types/brands"
import { IQueryable } from "@/src/lib/types/request"

export async function getBrandsList(params: IQueryable) {
	const url = new QueryParamsURLFactory(params, apiRoutes.brands.get).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.brands.multipleTag] },
	})

	return await buildApiResponse<Brand[]>(res)
}
