"use client"
import { Minus, Plus } from "lucide-react"
import React from "react"

interface Props {
	quantity: number
	actionIncrease: () => void
	actionDecrease: () => void
	loadingAction: boolean
}

export default function QuantityController({
	quantity,
	actionIncrease,
	actionDecrease,
	loadingAction,
}: Props) {
	return (
		<div className="flex items-center border rounded">
			<button
				className="p-1 2xs:p-2"
				aria-label="Decrease quantity"
				onClick={() => {
					actionDecrease()
				}}
				disabled={loadingAction}
			>
				<Minus className="h-4 w-4" />
			</button>
			<span className="px-2 2xs:px-4">{quantity}</span>
			<button
				className="p-1 2xs:p-2"
				aria-label="Increase quantity"
				onClick={() => {
					actionIncrease()
				}}
				disabled={loadingAction}
			>
				<Plus className="h-4 w-4" />
			</button>
		</div>
	)
}
