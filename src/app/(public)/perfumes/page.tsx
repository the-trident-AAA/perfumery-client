import PerfumesContainer from "@/src/sections/perfumes/perfumes-container"
import React from "react"

export const revalidate = 60

type Props = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PerfumesPage({ searchParams }: Props) {
	return <PerfumesContainer searchParams={await searchParams} />
}
