"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion"
import { Badge } from "@/src/components/ui/badge"
import { Card } from "@/src/components/ui/card"

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
					<AccordionContent className="px-6 pb-4">
						<div className="border-t pt-4 mt-2">
							<h3 className="font-medium text-lg mb-3">
								Perfumes en este pedido
							</h3>
							{order.perfumeOrder.length > 0 ? (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{order.perfumeOrder.map(
										(perfume, index) => (
											<div
												key={index}
												className="bg-muted p-4 rounded-md"
											>
												<div className="text-center text-muted-foreground">
													Tarjeta de perfume #
													{index + 1}
												</div>
											</div>
										),
									)}
								</div>
							) : (
								<p className="text-muted-foreground">
									No hay perfumes en este pedido.
								</p>
							)}
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	)
}
