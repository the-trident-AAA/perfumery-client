import { getPerfumesList } from "@/src/lib/services/perfumes"
import type { MetadataRoute } from "next"

export const revalidate = 86400

const baseUrl = "https://perfumesdelpuro.com"

async function getPerfumeUrls() {
	const res = await getPerfumesList({ limit: 100 })

	if (!res.response || res.error) return []

	const perfumes = res.response.data

	return perfumes.map(p => ({
		url: `${baseUrl}/perfumes/${p.id}`,
		changeFrequency: "monthly" as const,
		priority: 0.7,
		images: [p.image],
	}))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticUrls: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date("2025-11-18"),
			changeFrequency: "monthly",
			priority: 1,
			images: [`${baseUrl}/images/og-image-home.png`],
		},
		{
			url: `${baseUrl}/perfumes`,
			lastModified: new Date("2025-11-18"),
			changeFrequency: "weekly",
			priority: 0.9,
		},
	]

	const perfumeUrls = await getPerfumeUrls()

	return [...staticUrls, ...perfumeUrls]
}
