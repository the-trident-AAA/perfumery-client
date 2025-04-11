//import { useState } from "react"
import Image from "next/image"
//import { Heart } from "lucide-react"

export interface Perfum {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
	perfum: Perfum
}

export default function PerfurmCard({
  perfum: {id,brand, name, description, price, image },
}: Props) {
	return (
		<div className="w-full max-w-xs bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
			<div className="relative">
				<Image
					src={image || "/placeholder.svg"}
					alt={name}
					width={300}
					height={300}
					className="w-full h-64 object-contain bg-gray-50 p-4"
				/>
				{/*<button className="absolute top-3 right-3 p-1" onClick={() => setIsFavorite(!isFavorite)}>
          <Heart className={`w-6 h-6 ${isFavorite ? "fill-black stroke-black" : "stroke-black"}`} />
        </button>*/}
			</div>

			<div className="p-4 space-y-2">
				<h3 className="font-bold text-lg text-black">{brand}</h3>
				<div className="space-y-0.5">
					<h4 className="text-sm font-medium text-blue-900">
						{name}
					</h4>
					<p className="text-sm text-blue-900">{description}</p>
				</div>

        <div className="pt-4 pb-2">
          <p className="text-xl font-semibold">{price.toFixed(2)} $</p>
        </div>
      </div>

			<div className="border-t border-gray-200">
				<button className="w-full py-3 text-center text-pink-600 font-medium hover:bg-pink-50 transition-colors">
					Añadir al carrito
				</button>
			</div>
		</div>
	)
}
