import Image from "next/image"
import QuantityController from "@/src/components/quantity-controller/quantity-controller"
import { ShopCartPerfume } from "@/src/lib/types/shop-cart-perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"

interface PerfumeCartProps {
	perfurmeCart: ShopCartPerfume
	variant?: "default" | "modal"
}

export default function PerfumeShopCartCard({
	perfurmeCart: { perfume, cant, price },
}: PerfumeCartProps) {
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
							src={perfume.image || "images/place-holder.jpg"}
							alt={"image"}
							width={400}
							height={400}
						/>
					</div>

					{/* Información del producto */}
					<div className="flex flex-1 flex-col p-4">
						<div className="flex flex-col sm:flex-row sm:justify-between">
							<h3 className="font-medium text-base sm:text-lg truncate">
								{perfume.name}
							</h3>
							<p className="font-semibold text-sm 2xs:text-base">
								${fCurrency(perfume.price)}
							</p>
						</div>

						<p className="text-sm text-muted-foreground line-clamp-2 mt-1">
							{perfume.description}
						</p>

						{/* Controles de cantidad */}
						<div className="flex items-center flex-row gap-1 justify-between mt-3">
							<QuantityController quantity={cant} />
							<div className="flex flex-col 2xs:flex-row gap-1 items-center">
								<p className="font-medium ">Total: </p>
								<span className="font-bold text-sm 2xs:text-base">
									${fCurrency(price)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
