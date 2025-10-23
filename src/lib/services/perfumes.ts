"use server"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { PaginationResponse } from "@/src/lib/types/pagination"
import { Perfume, PerfumeDetails } from "@/src/lib/types/perfumes"
import { IQueryable } from "@/src/lib/types/request"

export async function getBestSellersPerfumes() {
	const params = new URLSearchParams()

	params.append("limit", "10")

	const res = await fetch(apiRoutes.perfumes.get + "?" + params.toString(), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.perfumes.multipleTag] },
	})

	return await buildApiResponse<Perfume[]>(res)
}

export async function getPerfumesList(params: IQueryable) {
	const url = new QueryParamsURLFactory(
		params,
		apiRoutes.perfumes.get,
	).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.perfumes.multipleTag] },
	})

	return await buildApiResponse<PaginationResponse<Perfume>>(res)
}

export async function getPerfumeById(id: string) {
	const res = await fetch(apiRoutes.perfumes.getById.replace(":id", id), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.perfumes.singleTag] },
	})

	return await buildApiResponse<PerfumeDetails>(res)
}
