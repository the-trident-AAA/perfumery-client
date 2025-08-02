"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion"
import { Badge } from "@/src/components/ui/badge"
import { Card } from "@/src/components/ui/card"
import { Package, Box } from "lucide-react"
import PerfumeOrdersList from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list"
import { Order } from "@/src/lib/types/orders"

interface Props {
	order: Order
	variant?: "modal" | "default"
}

export default function OrderCard({ order, variant = "default" }: Props) {
	const statusConfig = order.state

	return (
		<Card className="w-full mb-4 bg-muted overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
			{/* Gradient header bar */}

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value={order.id} className="border-0">
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
										Pedido #{order.id}
									</span>

									<Badge
										className={`bg-secondary text-primary mt-2 flex items-center gap-1 px-3 py-1`}
									>
										<Box className="h-3 w-3" />
										{order.state}
									</Badge>
								</div>
							</div>

							<div className="flex flex-col gap-2 w-full justify-center text-right">
								<span className="font-black text-black text-2xl">
									${order.totalMount.toFixed(2)}
								</span>

								<p className="text-sm text-black">
									Total del pedido
								</p>
							</div>
						</div>
					</AccordionTrigger>

					<AccordionContent className="p-4 bg-muted 2xs:px-6 pb-6">
						<PerfumeOrdersList
							perfumesOrder={order.orderPerfumes}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	)
}
