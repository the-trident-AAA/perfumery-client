"use server"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { Offer } from "@/src/lib/types/offers"
import { IQueryable } from "@/src/lib/types/request"

export async function getOffersList(params: IQueryable) {
	const url = new QueryParamsURLFactory(params, apiRoutes.offers.get).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.offers.multipleTag] },
	})

	return await buildApiResponse<Offer[]>(res)
}

export async function getOfferById(id: string) {
	const res = await fetch(apiRoutes.offers.getById.replace(":id", id), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.offers.singleTag] },
	})

	return await buildApiResponse<Offer>(res)
}
