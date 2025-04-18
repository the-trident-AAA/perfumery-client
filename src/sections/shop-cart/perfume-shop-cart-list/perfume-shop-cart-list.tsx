import PerfumeShopCartCard, {
	PerfumeCart,
} from "@/src/sections/shop-cart/perfume-shop-cart-card/perfume-shop-cart-card"
import React from "react"

const perfurmCarts: PerfumeCart[] = [
	{
		id: "1",
		perfume: {
			id: "1",
			brand: "Christian Dior",
			name: "Sauvage",
			description:
				"Una de las mejores fragancias que podrás encontrar sin duda alguna",
			price: 90,
			image: "/images/place-holder.jpg",
		},
		cant: 2,
		precio: 200,
	},
	{
		id: "2",
		perfume: {
			id: "2",
			brand: "Christian Dior",
			name: "Sauvage",
			description:
				"Una de las mejores fragancias que podrás encontrar sin duda alguna",
			price: 90,
			image: "/images/place-holder.jpg",
		},
		cant: 4,
		precio: 500,
	},
	{
		id: "3",
		perfume: {
			id: "3",
			brand: "Christian Dior",
			name: "Sauvage",
			description:
				"Una de las mejores fragancias que podrás encontrar sin duda alguna",
			price: 90,
			image: "/images/place-holder.jpg",
		},
		cant: 5,
		precio: 600,
	},
]

export default function PerfumeShopCartList() {
	return (
		<div className="grid grid-cols-1 gap-4 max-h-[500px] 2xs:max-h-[480px] sm:max-h-[620px] overflow-y-auto p-2">
			{perfurmCarts.map(perfumCart => (
				<PerfumeShopCartCard
					key={perfumCart.id}
					perfurmeCart={perfumCart}
				/>
			))}
		</div>
	)
}
