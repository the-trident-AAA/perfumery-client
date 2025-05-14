"use server"
import { buildApiResponse } from "@/src/lib/api"
import { QueryParamsURLFactory } from "@/src/lib/request"
import {
	apiRoutes,
	tagsCacheByRoutes,
} from "@/src/lib/routes/api-routes/api-routes"
import { HomeBanner, HomeBannerDetails } from "@/src/lib/types/home-banners"
import { IQueryable } from "@/src/lib/types/request"

export async function getHomeBannersList(params: IQueryable) {
	const url = new QueryParamsURLFactory(
		params,
		apiRoutes.homeBanners.get,
	).build()

	const res = await fetch(url, {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.homeBanners.multipleTag] },
	})
	console.log(res)
	return await buildApiResponse<HomeBanner[]>(res)
}

export async function getHomeBannerById(id: string) {
	const res = await fetch(apiRoutes.homeBanners.getById.replace(":id", id), {
		method: "GET",
		next: { tags: [tagsCacheByRoutes.homeBanners.singleTag] },
	})

	return await buildApiResponse<HomeBannerDetails>(res)
}
