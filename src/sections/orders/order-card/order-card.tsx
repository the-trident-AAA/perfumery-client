"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion"
import { Badge } from "@/src/components/ui/badge"
import { Card } from "@/src/components/ui/card"
import { Package, Clock, CheckCircle, XCircle, Truck } from "lucide-react"
import { Gender } from "@/src/lib/types/perfumes"
import type { PerfumeOrder } from "@/src/sections/orders/perfume-orders/perfume-order-card/perfume-order-card"
import PerfumeOrdersList from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list"

export interface Order {
	id: string
	code: string
	status: string
	price: number
	perfumeOrder: any[]
}

const getStatusConfig = (status: string) => {
	switch (status.toLowerCase()) {
		case "completado":
		case "entregado":
			return {
				color: "bg-green-500 hover:bg-green-600",
				icon: CheckCircle,
				gradient: "from-green-500/20 to-transparent",
			}
		case "en proceso":
			return {
				color: "bg-primary hover:bg-primary/90",
				icon: Clock,
				gradient: "from-primary/20 to-transparent",
			}
		case "enviado":
			return {
				color: "bg-secondary hover:bg-secondary/90",
				icon: Truck,
				gradient: "from-secondary/20 to-transparent",
			}
		case "pendiente":
			return {
				color: "bg-yellow-500 hover:bg-yellow-600",
				icon: Clock,
				gradient: "from-yellow-500/20 to-transparent",
			}
		case "cancelado":
			return {
				color: "bg-red-500 hover:bg-red-600",
				icon: XCircle,
				gradient: "from-red-500/20 to-transparent",
			}
		default:
			return {
				color: "bg-gray-500 hover:bg-gray-600",
				icon: Package,
				gradient: "from-gray-500/20 to-transparent",
			}
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
			available: true,
			cant: 0,
			gender: Gender.FEMALE,
			milliliters: 2,
			perfumeType: "sd",
			scents: ["a"],
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
			available: true,
			cant: 0,
			gender: Gender.FEMALE,
			milliliters: 2,
			perfumeType: "sd",
			scents: ["a"],
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
			available: true,
			cant: 0,
			gender: Gender.FEMALE,
			milliliters: 2,
			perfumeType: "sd",
			scents: ["a"],
		},
		cant: 5,
		precio: 600,
	},
]

export default function OrderCard({ order }: { order: Order }) {
	const statusConfig = getStatusConfig(order.status)
	const StatusIcon = statusConfig.icon

	return (
		<Card className="w-full mb-4 bg-muted overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
			{/* Gradient header bar */}

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value={order.code} className="border-0">
					<AccordionTrigger className="px-6 py-4 relative hover:no-underline group">
						<div
							className="absolute inset-y-0 left-0 w-1/2 bg-secondary"
							style={{
								clipPath:
									"polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
							}}
						/>
						<div className="flex flex-col z-10 md:flex-row w-full items-start md:items-center justify-between gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-primary p-3 rounded-full">
									<Package className="h-6 w-6 text-secondary" />
								</div>

								<div className="flex flex-col items-start">
									<span className="font-bold text-xl text-primary group-hover:text-primary/80 transition-colors">
										Pedido #{order.code}
									</span>

									<Badge
										className={`${statusConfig.color} text-white mt-2 flex items-center gap-1 px-3 py-1`}
									>
										<StatusIcon className="h-3 w-3" />
										{order.status}
									</Badge>
								</div>
							</div>

							<div className="flex flex-col gap-2 w-full justify-center text-right">
								<span className="font-black text-black text-2xl">
									${order.price.toFixed(2)}
								</span>

								<p className="text-sm text-black">
									Total del pedido
								</p>
							</div>
						</div>
					</AccordionTrigger>

					<AccordionContent className="p-4 bg-muted 2xs:px-6 pb-6">
						<PerfumeOrdersList perfumesOrder={perfurmesOrder} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	)
}
