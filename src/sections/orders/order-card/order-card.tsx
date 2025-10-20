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
import {
	getOrderStateText,
	getOrderStateVariant,
	Order,
} from "@/src/lib/types/orders"
import PerfumeOrdersListContainer from "@/src/sections/orders/perfume-orders/perfume-orders-list/perfume-orders-list-container"
import { fCurrency } from "@/src/lib/utils/format-number"
import { formatDate } from "@/src/lib/format-date"

interface Props {
	order: Order
	variant?: "modal" | "default"
}

export default function OrderCard({ order, variant = "default" }: Props) {
	return (
		<Card className="w-full mb-4 bg-muted overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
			{/* Gradient header bar */}

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value={order.id} className="border-0 px-2">
					<AccordionTrigger className="px-6 py-4 bg-secondary  relative hover:no-underline group">
						<div className="flex flex-col z-10 md:flex-row w-full items-start md:items-center justify-between gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-primary p-3 rounded-full">
									<Package className="h-6 w-6 text-secondary" />
								</div>

								<div className="flex flex-col items-start">
									<span className="font-bold text-xl text-primary group-hover:text-primary/80 transition-colors">
										Pedido {order.code}
									</span>

									<div className="flex flex-wrap items-center gap-4">
										<Badge
											className={`${getOrderStateVariant(order.state)} mt-2 flex items-center gap-1 px-3 py-1`}
										>
											<Box className="h-3 w-3" />
											{getOrderStateText(order.state)}
										</Badge>
										<div
											className="flex flex-col gap-1
										"
										>
											<p className="text-sm text-primary">
												Última actualización:
											</p>
											<Badge
												variant={"default"}
												className="text-secondary"
											>
												{formatDate(
													order.lastUpdateDate,
												)}
											</Badge>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-2 w-full justify-center text-right">
								<span className="font-black text-primary text-2xl">
									{fCurrency(order.totalMount)}
								</span>

								<p className="text-sm text-primary">
									Total del pedido
								</p>
							</div>
						</div>
					</AccordionTrigger>

					<AccordionContent className="p-4 bg-muted 2xs:px-6 pb-6">
						<PerfumeOrdersListContainer
							order={order}
							variant={variant}
						/>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	)
}
