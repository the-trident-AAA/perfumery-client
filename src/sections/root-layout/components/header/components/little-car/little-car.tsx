"use client"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import useLittleCar from "@/src/sections/root-layout/components/header/components/little-car/hooks/use-little-car"
import ShopCartContent from "@/src/sections/shop-cart/shop-cart-content"
import { ShoppingCartIcon } from "lucide-react"
import React from "react"

const LittleCar = () => {
	const { isPopoverOpen, handleOnOpenPopover } = useLittleCar()

	return (
		<Popover open={isPopoverOpen} onOpenChange={handleOnOpenPopover}>
			<PopoverTrigger asChild>
				<button
					className="flex items-center justify-center  rounded-full bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label="Little Car"
				>
					<ShoppingCartIcon className="size-8 sm:size-12 text-white" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-full max-h-screen overflow-auto">
				<ShopCartContent />
			</PopoverContent>
		</Popover>
	)
}

export default LittleCar
