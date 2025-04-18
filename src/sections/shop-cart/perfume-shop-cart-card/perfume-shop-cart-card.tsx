"use client"

import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Perfum } from "@/src/components/perfum-card/perfum-card"

export interface PerfumeCart {
	id: string
	perfume: Perfum
	cant: number
	precio: number
}

interface PerfumeCartProps {
	perfurmeCart: PerfumeCart
}

export default function PerfumeShopCartCard({
	perfurmeCart: { id, perfume, cant, precio },
}: PerfumeCartProps) {
	return (
		<Card className="overflow-hidden border-muted">
			<CardContent className="p-0">
				<div className="flex flex-row items-center">
					{/* Imagen del producto */}
					<div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0">
						<Image
							src={
								perfume.image ||
								"/placeholder.svg?height=128&width=128"
							}
							alt={perfume.name}
							fill
							className="object-cover"
						/>
					</div>

					{/* Información del producto */}
					<div className="flex flex-1 flex-col p-4">
						<div className="flex flex-col sm:flex-row sm:justify-between">
							<h3 className="font-medium text-base sm:text-lg truncate">
								{perfume.name}
							</h3>
							<p className="font-semibold text-base sm:text-lg">
								${precio.toFixed(2)}
							</p>
						</div>

						<p className="text-sm text-muted-foreground line-clamp-2 mt-1">
							{perfume.description}
						</p>

						{/* Controles de cantidad */}
						<div className="flex items-center justify-between mt-3">
							<div className="flex items-center space-x-2">
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8"
									disabled={cant <= 1}
								>
									<Minus className="h-4 w-4" />
								</Button>
								<span className="w-8 text-center">{cant}</span>
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8"
								>
									<Plus className="h-4 w-4" />
								</Button>
							</div>
							<p className="font-medium">
								Total:{" "}
								<span className="font-bold">
									${(precio * cant).toFixed(2)}
								</span>
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
