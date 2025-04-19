"use client"
import { Minus, Plus } from "lucide-react"
import React from "react"

interface Props {
	quantity: number
}

export default function QuantityController({ quantity }: Props) {
	return (
		<div className="flex items-center border rounded">
			<button className="p-1 2xs:p-2" aria-label="Decrease quantity">
				<Minus className="h-4 w-4" />
			</button>
			<span className="px-2 2xs:px-4">{quantity}</span>
			<button className="p-1 2xs:p-2" aria-label="Increase quantity">
				<Plus className="h-4 w-4" />
			</button>
		</div>
	)
}
