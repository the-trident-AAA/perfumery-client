import { CardSkeletonGroup } from "@/src/components/card-skeleton-group/card-skeleton-group"
import OrdersList from "@/src/sections/orders/orders-list/orders-list"
import { ListOrderedIcon } from "lucide-react"
import React, { Suspense } from "react"

interface Props {
	variant?: "modal" | "default"
}

export default function OrdersContent({ variant = "default" }: Props) {
	return (
		<div className="flex flex-col gap-2 mt-2">
			<div className="flex bg-secondary p-2 rounded-2xl justify-center gap-2">
				<ListOrderedIcon className="size-8 text-primary" />
				<h1 className="text-2xl text-primary font-bold">
					Pedidos Realizados
				</h1>
			</div>
			<Suspense
				fallback={
					<CardSkeletonGroup
						containerClassName="grid grid-cols-1 gap-8 w-full"
						count={8}
					/>
				}
			>
				<OrdersList variant={variant} />
			</Suspense>
		</div>
	)
}
