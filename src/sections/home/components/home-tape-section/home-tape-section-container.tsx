import { getMainTape } from "@/src/lib/services/tapes"
import HomeTapeSection from "@/src/sections/home/components/home-tape-section/home-tape-section"
import React from "react"

export default async function HomeTapeSectionContainer() {
	const res = await getMainTape()

	if (!res.response || res.error) return <div>Error al cargar el tape</div>

	const tape = res.response
	return <HomeTapeSection tape={tape} />
}
