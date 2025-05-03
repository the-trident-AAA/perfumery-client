"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion"
import { Badge } from "@/src/components/ui/badge"
import { Card } from "@/src/components/ui/card"
import { PerfumeOrder } from "@/src/sections/orders/perfume-orders/perfume-order-card/perfume-order-card"
import PerfumeOrdersList from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list"

export interface Order {
	id: string
	code: string
	status: string
	price: number
	perfumeOrder: any[]
}

const getStatusColor = (status: string) => {
	switch (status.toLowerCase()) {
		case "completado":
		case "entregado":
			return "bg-green-500"
		case "en proceso":
		case "enviado":
			return "bg-blue-500"
		case "pendiente":
			return "bg-yellow-500"
		case "cancelado":
			return "bg-red-500"
		default:
			return "bg-gray-500"
	}
}

const perfurmesOrder: PerfumeOrder[] = [
	{
		id: "1",
		perfume: {
			id: "1",
			brand: "Christian Dior",
			name: "Sauvage",
			description:
				"Una de las mejores fragancias que podrás encontrar sin duda alguna",
			price: 90,
			image: "/images/place-holder.jpg",
		},
		cant: 2,
		precio: 200,
	},
	{
		id: "2",
		perfume: {
			id: "2",
			brand: "Christian Dior",
			name: "Sauvage",
			description:
				"Una de las mejores fragancias que podrás encontrar sin duda alguna",
			price: 90,
			image: "/images/place-holder.jpg",
		},
		cant: 4,
		precio: 500,
	},
	{
		id: "3",
		perfume: {
			id: "3",
			brand: "Christian Dior",
			name: "Sauvage",
			description:
				"Una de las mejores fragancias que podrás encontrar sin duda alguna",
			price: 90,
			image: "/images/place-holder.jpg",
		},
		cant: 5,
		precio: 600,
	},
]

export default function OrderCard({ order }: { order: Order }) {
	return (
		<Card className="w-full mb-4 overflow-hidden">
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value={order.code} className="border-0">
					<AccordionTrigger className="px-6 py-4 hover:no-underline">
						<div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-2">
							<div className="flex flex-col items-start">
								<span className="font-semibold text-lg">
									Pedido #{order.code}
								</span>
								<Badge
									className={`${getStatusColor(order.status)} text-white mt-1`}
								>
									{order.status}
								</Badge>
							</div>
							<div className="text-right">
								<span className="font-bold text-xl">
									${order.price.toFixed(2)}
								</span>
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent className="px-4 2xs:px-6 pb-4">
						<PerfumeOrdersList perfumesOrder={perfurmesOrder} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	)
}
