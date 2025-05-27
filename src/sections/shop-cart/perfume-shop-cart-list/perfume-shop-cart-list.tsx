import { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"
import PerfumeShopCartCard from "@/src/sections/shop-cart/perfume-shop-cart-card/perfume-shop-cart-card"
import React from "react"

interface Props {
	variant?: "default" | "modal"
	shopCartPerfumes: ShopCartPerfume[]
	shopCartRefresh: () => Promise<void>
}

export default function PerfumeShopCartList({
	shopCartPerfumes,
	variant = "default",
	shopCartRefresh,
}: Props) {
	return (
		<div
			className={`grid grid-cols-1 gap-4 ${variant === "modal" ? "max-h-[500px] 2xs:max-h-[480px] sm:max-h-[620px]" : ""} overflow-y-auto p-2`}
		>
			{shopCartPerfumes.map((shopCartPerfume, index) => (
				<PerfumeShopCartCard
					key={index}
					shopCartPerfume={shopCartPerfume}
					variant={variant}
					shopCartRefresh={shopCartRefresh}
				/>
			))}
		</div>
	)
}
