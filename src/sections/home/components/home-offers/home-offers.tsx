"use client"
import { StandardCarouselProvider } from "@/src/components/ui/standard-carousel/context/standard-carousel-context"
import StandardCarousel from "@/src/components/ui/standard-carousel/standard-carousel"
import OfferCard, {
	Offer,
} from "@/src/sections/home/components/home-offers/components/offer-card/offer-card"
import React from "react"

const offers: Offer[] = [
	{
		id: 1,
		name: "EVENTO ESPECIAL DE PRIMAVERA",
		description:
			"Descubre descuentos exclusivos en fragancias premium - ¡Disponible por tiempo limitado!",
		image: "/images/place/holder.jpg",
		type: "Oferta Especial",
		scope: "Hasta que se agoten las existencias",
		discount: 0.8,
	},
	{
		id: 2,
		name: "EVENTO ESPECIAL DE PRIMAVERA",
		description:
			"Descubre descuentos exclusivos en fragancias premium - ¡Disponible por tiempo limitado!",
		image: "/images/place/holder.jpg",
		type: "Oferta Especial",
		scope: "Hasta que se agoten las existencias",
		discount: 0.8,
	},
	{
		id: 3,
		name: "EVENTO ESPECIAL DE PRIMAVERA",
		description:
			"Descubre descuentos exclusivos en fragancias premium - ¡Disponible por tiempo limitado!",
		image: "/images/place/holder.jpg",
		type: "Oferta Especial",
		scope: "Hasta que se agoten las existencias",
		discount: 0.8,
	},
	{
		id: 4,
		name: "EVENTO ESPECIAL DE PRIMAVERA",
		description:
			"Descubre descuentos exclusivos en fragancias premium - ¡Disponible por tiempo limitado!",
		image: "/images/place/holder.jpg",
		type: "Oferta Especial",
		scope: "Hasta que se agoten las existencias",
		discount: 0.8,
	},
	{
		id: 5,
		name: "EVENTO ESPECIAL DE PRIMAVERA",
		description:
			"Descubre descuentos exclusivos en fragancias premium - ¡Disponible por tiempo limitado!",
		image: "/images/place/holder.jpg",
		type: "Oferta Especial",
		scope: "Hasta que se agoten las existencias",
		discount: 0.8,
	},
	{
		id: 6,
		name: "EVENTO ESPECIAL DE PRIMAVERA",
		description:
			"Descubre descuentos exclusivos en fragancias premium - ¡Disponible por tiempo limitado!",
		image: "/images/place/holder.jpg",
		type: "Oferta Especial",
		scope: "Hasta que se agoten las existencias",
		discount: 0.8,
	},
]

export default function HomeOffers() {
	return (
		<div className="flex flex-col gap-1">
			<p className="text-2xl">Ofertas</p>
			<StandardCarouselProvider>
				<StandardCarousel
					items={offers}
					dimension="100vw"
					itemsStyles="2xs:basis-1/2 lg:basis-1/3"
					withArrows
					arrowsPosition="outside"
					arrowsLocation="bottom"
					renderCard={item => <OfferCard offer={item} />}
				/>
			</StandardCarouselProvider>
		</div>
	)
}
