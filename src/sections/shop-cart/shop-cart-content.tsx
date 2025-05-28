"use client"
import { FetchingDataErrorPanel } from "@/src/components/fetching-data-error-panel/fetching-data-error-panel"
import { Button } from "@/src/components/ui/button"
import { LoadingSpinner } from "@/src/components/ui/loading-spinner"
import { ShopCart } from "@/src/lib/types/shop-cart"
import { fCurrency } from "@/src/lib/utils/format-number"
import ClearShopCartButton from "@/src/sections/shop-cart/components/clear-shop-cart-button/clear-shop-cart-button"
import { ShopCartContext } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import PerfumeShopCartList from "@/src/sections/shop-cart/perfume-shop-cart-list/perfume-shop-cart-list"

import { ShoppingCart as ShoppingCartIcon } from "lucide-react"

import React, { useContext, useEffect, useRef } from "react"

interface Props {
	variant?: "default" | "modal"
}

interface ShopCartContentProps {
	shopCartData: ShopCart
	variant: "default" | "modal"
	onRefresh: () => Promise<void>
	isDisabled?: boolean
}

const ShopCartContentBody = ({
	shopCartData,
	variant,
	onRefresh,
	isDisabled = false,
}: ShopCartContentProps) => {
	return (
		<div
			className={`flex gap-2 ${variant === "default" ? "flex-col-reverse" : "flex-col"}`}
		>
			<PerfumeShopCartList
				shopCartPerfumes={shopCartData.shopCartPerfumes}
				variant={variant}
				shopCartRefresh={onRefresh}
			/>
			<div className="flex flex-col gap-2 items-center justify-center">
				<div className="flex text-sm sm:text-lg flex-col gap-2">
					<div className="flex justify-between font-semibold gap-2">
						<span>Monto Total:</span>
						<span>{fCurrency(shopCartData.totalMount)}</span>
					</div>
					<div className="flex justify-between font-semibold gap-2">
						<span>Total de Productos:</span>
						<span>{shopCartData.totalItems}</span>
					</div>
				</div>
				<div className="flex gap-2">
					<Button
						className="bg-primary lg:text-lg"
						disabled={isDisabled}
					>
						Crear Pedido
					</Button>
					<ClearShopCartButton
						shopCartId={shopCartData.id}
						shopCartRefresh={onRefresh}
						isDisabled={isDisabled}
					/>
				</div>
			</div>
		</div>
	)
}

export default function ShopCartContent({ variant = "default" }: Props) {
	const { shopCart, loading, error, fetchShopCart } =
		useContext(ShopCartContext)
	const lastValidShopCart = useRef(shopCart)

	useEffect(() => {
		if (shopCart && !error) {
			lastValidShopCart.current = shopCart
		}
	}, [shopCart, error])

	return (
		<div className="flex flex-col gap-4 mt-2 w-full">
			<div className="flex justify-center gap-2">
				<ShoppingCartIcon className="size-8" />
				<h1 className="text-2xl font-bold">Tu Carrito</h1>
			</div>

			{loading ? (
				lastValidShopCart.current ? (
					<ShopCartContentBody
						shopCartData={lastValidShopCart.current}
						variant={variant}
						onRefresh={fetchShopCart}
						isDisabled
					/>
				) : (
					<div className="flex justify-center items-center">
						<LoadingSpinner size={32} />
					</div>
				)
			) : shopCart && !error ? (
				<ShopCartContentBody
					shopCartData={shopCart}
					variant={variant}
					onRefresh={fetchShopCart}
				/>
			) : (
				<FetchingDataErrorPanel
					message={error as string}
					reset={fetchShopCart}
				/>
			)}
		</div>
	)
}
