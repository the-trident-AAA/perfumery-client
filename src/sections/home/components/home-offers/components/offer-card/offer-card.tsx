import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

export interface Offer {
	id: number
	name: string
	description: string
	image: string
	type: string
	scope: string
	discount: number
}

interface Props {
	offer: Offer
}

export default function OfferCard({
	offer: { id, name, description, image, type, scope, discount },
}: Props) {
	return (
		<Card className="w-full max-w-md overflow-hidden rounded-xl shadow-lg">
			{/* Banner superior con gradiente */}
			<div className="relative h-32 bg-gradient-to-r from-teal-600 to-emerald-400 p-6 text-white">
				<div className="absolute top-0 left-0 w-full h-full opacity-20">
					<div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
				</div>
				<div className="relative z-10">
					<p className="text-sm font-medium tracking-wider">
						EN TIENDA Y ONLINE
					</p>
					<h2 className="mt-1 text-3xl font-bold tracking-tight">
						HASTA{" "}
						<span className="text-5xl">{discount * 100}%</span>{" "}
						DESCUENTO
					</h2>
				</div>
			</div>

			{/* Contenido principal */}
			<CardContent className="p-0">
				<div className="relative">
					{/* Imagen de fondo con perfumes */}
					<div className="relative h-64 w-full overflow-hidden bg-teal-50">
						<div className="absolute inset-0 flex items-center justify-center">
							<Image
								src="/images/place-holder.jpg"
								width={600}
								height={400}
								alt="Colección de perfumes de lujo"
								className="object-cover"
							/>
						</div>

						{/* Overlay con texto descriptivo */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
							<h3 className="text-xl font-semibold">{name}</h3>
							<p className="mt-2 line-clamp-3 break-words text-xs text-secondary-app sm:text-sm">
								{description}
							</p>

							{/* Botón de acción */}
							<Button className="mt-4 bg-white text-teal-800 hover:bg-teal-100 w-full sm:w-auto flex items-center justify-center gap-2 group">
								Comprar Ahora
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</div>
				</div>

				{/* Sección inferior con detalles adicionales */}
				<div className="p-6 bg-white">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-muted-foreground">
								Fragancias seleccionadas
							</p>
							<p className="text-sm font-medium">{scope}</p>
						</div>
						<div className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
							{type}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
