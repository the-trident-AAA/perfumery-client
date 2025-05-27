import Image from "next/image"
import QuantityController from "@/src/components/quantity-controller/quantity-controller"
import { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"
import { perfumeImagePlaceHolder } from "@/src/sections/perfumes/lib/image-place-holder"
import usePerfumeShopCartCard from "@/src/sections/shop-cart/perfume-shop-cart-card/hooks/use-perfume-shop-cart-card"

interface PerfumeCartProps {
	shopCartPerfume: ShopCartPerfume
	variant?: "default" | "modal"
	shopCartRefresh: () => Promise<void>
}

export default function PerfumeShopCartCard({
	shopCartPerfume,
	shopCartRefresh,
}: PerfumeCartProps) {
	const { loadingEdit, increaseQuantity, decreaseQuantity } =
		usePerfumeShopCartCard({
			shopCartPerfume,
			shopCartRefresh,
		})
	return (
		<div className=" rounded-2xl border">
			<div className="p-0">
				<div className={`flex items-center`}>
					{/* Imagen del producto */}
					<div
						className={`relative h-28 w-28 2xs:h-32 2xs:w-32 flex-shrink-0`}
					>
						<Image
							className="aspect-square object-cover"
							src={
								shopCartPerfume.perfume.image ||
								perfumeImagePlaceHolder
							}
							alt={"image"}
							width={400}
							height={400}
						/>
					</div>

					{/* Información del producto */}
					<div className="flex flex-1 flex-col p-4">
						<div className="flex flex-col sm:flex-row sm:justify-between">
							<h3 className="font-medium text-base sm:text-lg truncate">
								{shopCartPerfume.perfume.name}
							</h3>
							<p className="font-semibold text-sm 2xs:text-base">
								{fCurrency(shopCartPerfume.perfume.price)}
							</p>
						</div>

						<p className="text-sm text-muted-foreground line-clamp-2 mt-1">
							{shopCartPerfume.perfume.description}
						</p>

						{/* Controles de cantidad */}
						<div className="flex items-center flex-row gap-1 justify-between mt-3">
							<QuantityController
								quantity={shopCartPerfume.cant}
								actionIncrease={increaseQuantity}
								actionDecrease={decreaseQuantity}
								loadingAction={loadingEdit}
							/>
							<div className="flex flex-col 2xs:flex-row gap-1 items-center">
								<p className="font-medium ">Total: </p>
								<span className="font-bold text-sm 2xs:text-base">
									{fCurrency(shopCartPerfume.price)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
