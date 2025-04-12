import { Perfum } from "@/src/components/perfum-card/perfum-card"
import React from "react"

interface Props {
	perfum: Perfum
}

// Aquí en este componente haz toda la maqutación que estimes conveniente Andy
export default function PerfumDetailsPanel({
	perfum: { id, name, brand, description, image, price },
}: Props) {
	return <div>Aquí iría el diseño del modal con id: {id}</div>
}
