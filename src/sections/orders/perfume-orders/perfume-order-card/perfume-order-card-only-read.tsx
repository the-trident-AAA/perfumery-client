"use client"

import Image from "next/image"
import { OrderPerfume } from "@/src/lib/types/orders-perfumes"
import { fCurrency } from "@/src/lib/utils/format-number"

interface Props {
	perfumeOrder: OrderPerfume
}

export default function PerfumeOrderCardOnlyRead({
	perfumeOrder: { perfume, cant, price },
}: Props) {
	return (
		<div className=" rounded-2xl border">
			<div className="p-0">
				<div className={`flex items-center`}>
					{/* Imagen del producto */}
					<div
						className={`relative h-21 w-21 2xs:h-32 2xs:w-32 flex-shrink-0`}
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
							<h3 className="font-medium text-xs 2xs:text-base sm:text-lg truncate">
								{perfume.name}
							</h3>
							<p className="font-semibold text-xs 2xs:text-base">
								{fCurrency(perfume.totalPrice)}
							</p>
						</div>

						<p className="text-xs 2xs:text-sm text-muted-foreground line-clamp-2 mt-1">
							{perfume.description}
						</p>

						{/* Controles de cantidad */}
						<div className="flex items-center flex-row gap-1 justify-between mt-3">
							<div className="flex items-center gap-2">
								<p className="font-medium text-xs 2xs:text-base">
									cantidad:{" "}
								</p>
								<p className="font-bold text-xs 2xs:text-base">
									{cant}
								</p>
							</div>
							<div className="flex flex-col items-center 2xs:flex-row gap-1">
								<p className="font-medium text-xs 2xs:text-base ">
									Total:{" "}
								</p>
								<span className="font-bold text-xs 2xs:text-base">
									{fCurrency(price)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
