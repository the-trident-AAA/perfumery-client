"use client"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover"
import useLittleCar from "@/src/sections/root-layout/components/header/components/little-car/hooks/use-little-car"
import LittleCarButton from "@/src/sections/root-layout/components/header/components/little-car/little-car-button/little-car-button"
import ShopCartContent from "@/src/sections/shop-cart/shop-cart-content"
import React from "react"

const LittleCar = () => {
	const { isPopoverOpen, handleOnOpenPopover } = useLittleCar()

	return (
		<Popover open={isPopoverOpen} onOpenChange={handleOnOpenPopover}>
			<PopoverTrigger asChild>
				<LittleCarButton />
			</PopoverTrigger>
			<PopoverContent className="w-full">
				<ShopCartContent variant="modal" />
			</PopoverContent>
		</Popover>
	)
}

export default LittleCar
