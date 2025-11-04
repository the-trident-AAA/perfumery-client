import { getPerfumeById } from "@/src/lib/services/perfumes"
import PerfumeDetailsContent from "@/src/sections/perfumes/details/perfume-details-content"
import { Metadata } from "next"
import React from "react"

type Props = {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const perfumeId = (await params).id
	const res = await getPerfumeById(perfumeId)

	if (!res.response || res.error)
		throw new Error("Error al cargar al información del perfume")

	const perfume = res.response
	return {
		title: `${perfume.name} - ${perfume.brand.name} | Perfumes del Puro`,
		description: perfume.description.slice(0, 160),
		openGraph: {
			title: `${perfume.name} - ${perfume.brand.name}`,
			description: perfume.description,
			images: [perfume.image],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: perfume.name,
			description: perfume.description,
			images: [perfume.image],
		},
	}
}

export default async function PerfumeDetailsPage({ params }: Props) {
	const perfumeId = (await params).id
	const res = await getPerfumeById(perfumeId)

	if (!res.response || res.error)
		throw new Error("Error al cargar al información del perfume")

	return <PerfumeDetailsContent perfume={res.response} />
}
