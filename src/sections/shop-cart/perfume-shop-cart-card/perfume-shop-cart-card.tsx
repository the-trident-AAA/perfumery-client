"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import QuantityController from "@/src/components/quantity-controller/quantity-controller"
import type { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
import usePerfumeShopCartCard from "@/src/sections/shop-cart/perfume-shop-cart-card/hooks/use-perfume-shop-cart-card"
import { Button } from "@/src/components/ui/button"

interface PerfumeCartProps {
	shopCartPerfume: ShopCartPerfume
	variant?: "default" | "modal"
	shopCartRefresh: () => Promise<void>
}

export default function PerfumeShopCartCard({
	shopCartPerfume,
	shopCartRefresh,
}: PerfumeCartProps) {
	const {
		loadingEdit,
		loadingDelete,
		increaseQuantity,
		decreaseQuantity,
		onDeleteShopCartPerfume,
	} = usePerfumeShopCartCard({
		shopCartPerfume,
		shopCartRefresh,
	})

	return (
		<div className="rounded-2xl border relative group">
			<Button
				variant="ghost"
				size="sm"
				onClick={onDeleteShopCartPerfume}
				disabled={loadingDelete}
				className="absolute top-2 right-2 z-10 h-8 w-8 p-0 transition-opacity duration-200 hover:bg-red-50 hover:text-red-600 rounded-full"
				aria-label="Eliminar producto"
			>
				<Trash2 className="h-4 w-4" />
			</Button>

			<div className="p-4">
				<div className="flex items-center gap-4">
					{/* Imagen del producto */}
					<div className="relative h-28 w-28 2xs:h-32 2xs:w-32 flex-shrink-0">
						<Image
							className="aspect-square object-cover rounded-lg"
							src={
								shopCartPerfume.perfume.image ||
								perfumeImagePlaceHolder
							}
							alt="image"
							width={400}
							height={400}
						/>
					</div>

					{/* Contenido del producto */}
					<div className="flex-1 min-w-0">
						<div className="flex flex-col gap-2">
							{/* Nombre del producto */}
							<h3 className="font-semibold text-sm 2xs:text-base line-clamp-2 pr-8">
								{shopCartPerfume.perfume.name}
							</h3>

							{/* Precio */}
							<p className="text-lg font-bold text-primary">
								{fCurrency(shopCartPerfume.perfume.price)}
							</p>

							{/* Controlador de cantidad */}
							<div className="flex items-center justify-between mt-2">
								<QuantityController
									quantity={shopCartPerfume.cant}
									actionIncrease={increaseQuantity}
									actionDecrease={decreaseQuantity}
									loadingAction={loadingEdit}
								/>

								{/* Precio total */}
								<div className="text-right">
									<p className="text-sm text-muted-foreground">
										Total
									</p>
									<p className="font-bold">
										{fCurrency(shopCartPerfume.price)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
