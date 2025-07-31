"use client"

import Image from "next/image"
import { Sparkles, Trash2 } from "lucide-react"
import QuantityController from "@/src/components/quantity-controller/quantity-controller"
import type { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
import usePerfumeShopCartCard from "@/src/sections/shop-cart/perfume-shop-cart-card/hooks/use-perfume-shop-cart-card"
import { Button } from "@/src/components/ui/button"
import { useState } from "react"
import { Badge } from "@/src/components/ui/badge"

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
		<div className="group relative overflow-hidden border-0 bg-gradient-to-r from-white via-white to-gray-50/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 z-20" />

			{/* Líneas laterales con efecto de flujo */}
			<div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-10 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
			<div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-10 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />

			{/* Elementos decorativos flotantes */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<Sparkles className="absolute top-4 right-16 h-3 w-3 text-primary/60 animate-pulse" />
				<Sparkles className="absolute bottom-4 left-8 h-2 w-2 text-primary/40 animate-pulse delay-300" />
			</div>

			{/* Background gradient dinámico */}
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
					<div className="relative h-24 w-24 2xs:h-28 2xs:w-28 flex-shrink-0 group">
						<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<Image
							className="aspect-square object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 relative z-10"
							src={
								shopCartPerfume.perfume.image ||
								perfumeImagePlaceHolder ||
								"/placeholder.svg"
							}
							alt="image"
							width={400}
							height={400}
						/>
						{/* Efecto de brillo en la imagen */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out rounded-xl" />

						{/* Badge de cantidad si es mayor a 1 */}
						{shopCartPerfume.cant > 1 && (
							<div className="absolute -top-2 -right-2 z-20">
								<Badge className="bg-gradient-to-r from-primary to-primary/80 text-white font-bold px-2 py-1 shadow-lg border-2 border-white/20 animate-pulse">
									x{shopCartPerfume.cant}
								</Badge>
							</div>
						)}
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
