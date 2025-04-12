"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import type { Perfum } from "@/src/components/perfum-card/perfum-card"
interface Props {
	perfum: Perfum
}

export default function PerfumDetailsPanel({
	perfum: { id, name, brand, description, image, price },
}: Props) {
	const [quantity, setQuantity] = useState(1)
	const [selectedSize, setSelectedSize] = useState("3.4oz")

	// Valores por defecto para las opciones de tamaño
	const sizeOptions = [
		{ value: "1.0oz", label: "1.0 OZ. / 30 ML" },
		{ value: "1.7oz", label: "1.7 OZ. / 50 ML" },
		{ value: "3.4oz", label: "3.4 OZ. / 100 ML" },
		{ value: "6.8oz", label: "6.8 OZ. / 200 ML" },
	]

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}

	const increaseQuantity = () => {
		setQuantity(quantity + 1)
	}

	return (
		<div className="max-w-6xl mx-auto p-4">
			<div className="grid md:grid-cols-2 gap-8">
				{/* Product Image */}
				<div className="flex justify-center">
					<Image
						src={image || "/placeholder.svg"}
						alt={name}
						width={400}
						height={400}
						className="object-contain"
					/>
				</div>

				{/* Product Details */}
				<div className="flex flex-col space-y-6">
					{/* Brand */}
					<h2 className="text-xl font-bold uppercase">{name}</h2>

					{/* Product Name */}
					<h1 className="text-lg font-medium">{brand}</h1>

					{/* Price */}
					<div className="flex items-center space-x-3">
						<span className="text-xl font-bold">
							${price.toFixed(2)}
						</span>
					</div>

					{/* Description */}
					<p className="text-gray-700">{description}</p>

					{/* Size */}
					<div>
						<div className="flex justify-between">
							<span className="font-medium">
								{" "}
								Size:{" "}
								{
									sizeOptions.find(
										option => option.value === selectedSize,
									)?.label
								}
							</span>
						</div>
						<p className="text-gray-600 mt-1">Standard size</p>
					</div>

					{/* Size Options */}
					<div className="grid grid-cols-2 gap-3">
						{sizeOptions.map(option => (
							<button
								key={option.value}
								className={`border rounded py-2 px-4 text-sm ${
									selectedSize === option.value
										? "border-black"
										: "border-gray-300 hover:border-gray-500"
								}`}
								onClick={() => setSelectedSize(option.value)}
							>
								{option.label}
							</button>
						))}
					</div>

					{/* Quantity and Add to Cart */}
					<div className="flex justify-end items-center space-x-4 mt-6">
						<div className="flex items-center border rounded">
							<button
								className="p-2"
								onClick={decreaseQuantity}
								aria-label="Decrease quantity"
							>
								<Minus className="h-4 w-4" />
							</button>
							<span className="px-4">{quantity}</span>
							<button
								className="p-2"
								onClick={increaseQuantity}
								aria-label="Increase quantity"
							>
								<Plus className="h-4 w-4" />
							</button>
						</div>
						<Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-2 rounded">
							Añadir al carrito
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
