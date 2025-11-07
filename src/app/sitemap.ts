import { getPerfumesList } from "@/src/lib/services/perfumes"
import type { MetadataRoute } from "next"

const baseUrl = "https://perfumesdelpuro.com"

async function getPerfumeUrls() {
	const res = await getPerfumesList({ limit: 100 })

	if (!res.response || res.error) return []

	const perfumes = res.response.data

	return perfumes.map((p: { id: string }) => ({
		url: `${baseUrl}/perfumes/${p.id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticUrls: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/perfumes`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
	]

	const perfumeUrls = await getPerfumeUrls()

	return [...staticUrls, ...perfumeUrls]
}
