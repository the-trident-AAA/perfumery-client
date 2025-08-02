"use client"

import { Minus, Plus } from "lucide-react"

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
		<div className="flex items-center z-10 border-1 rounded-lg hover:border-primary/50 transition-all duration-300">
			<button
				className="p-1 2xs:p-2 text-primary bg-secondary hover:bg-secondary/70 transition-all duration-200 rounded-l-md"
				aria-label="Decrease quantity"
				onClick={() => {
					actionDecrease()
				}}
				disabled={loadingAction}
			>
				<Minus className="h-4 w-4" />
			</button>
			<span className="px-2 2xs:px-4 font-semibold bg-muted text-secondary border-x border-secondary/20">
				{quantity}
			</span>
			<button
				className="p-1 2xs:p-2 text-primary bg-secondary hover:bg-secondary/70 transition-all duration-200 rounded-r-md"
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
