"use server"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { PerfumeType } from "@/src/lib/types/perfume-types"
import { IQueryable } from "@/src/lib/types/request"

export async function getPerfumeTypesList(params: IQueryable) {
	const url = new QueryParamsURLFactory(
		params,
		apiRoutes.perfumeTypes.get,
	).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.perfumeTypes.multipleTag] },
	})

	return await buildApiResponse<PerfumeType[]>(res)
}

export async function getPerfumeTypeById(id: string) {
	const res = await fetch(apiRoutes.perfumeTypes.getById.replace(":id", id), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.perfumeTypes.singleTag] },
	})

	return await buildApiResponse<PerfumeType>(res)
}
