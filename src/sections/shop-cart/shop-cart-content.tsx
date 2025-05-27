"use client"
import { FetchingDataErrorPanel } from "@/src/components/fetching-data-error-panel/fetching-data-error-panel"
import { Button } from "@/src/components/ui/button"
import useShopCart from "@/src/sections/shop-cart/hooks/use-shop-cart"
import PerfumeShopCartList from "@/src/sections/shop-cart/perfume-shop-cart-list/perfume-shop-cart-list"

import { ShoppingCart as ShoppingCartIcon, Trash2Icon } from "lucide-react"

import React from "react"

interface Props {
	variant?: "default" | "modal"
}

export default function ShopCartContent({ variant = "default" }: Props) {
	const { shopCart, loading, error, fetchShopCart } = useShopCart()
	return (
		<div className="flex flex-col gap-4 mt-2 w-full">
			<div className="flex  justify-center gap-2">
				<ShoppingCartIcon className="size-8" />
				<h1 className="text-2xl font-bold">Tu Carrito</h1>
			</div>
			{loading ? (
				"Cargando"
			) : shopCart && !error ? (
				<div
					className={`flex gap-2 ${variant === "default" ? "flex-col-reverse" : "flex-col"}`}
				>
					<PerfumeShopCartList
						shopCartPerfumes={shopCart.shopCartPerfumes}
						variant={variant}
					/>
					<div className="flex flex-col gap-2 items-center justify-center">
						<div className="flex justify-between font-semibold gap-2 text-lg">
							<span>Total</span>
							<span>$1000</span>
						</div>
						<div className="flex gap-2">
							<Button className="bg-primary lg:text-lg">
								Crear Pedido
							</Button>
							<Button className="flex gap-2 bg-red-600">
								<Trash2Icon className="size-5 lg:size-6" />
							</Button>
						</div>
					</div>
				</div>
			) : (
				<FetchingDataErrorPanel
					message={error as string}
					reset={fetchShopCart}
				/>
			)}
		</div>
	)
}
