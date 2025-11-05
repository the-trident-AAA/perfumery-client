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
						<div className="z-10 w-full grid 2xs:grid-cols-2 gap-4">
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-start">
									<div className="flex items-center gap-2">
										<div className="bg-primary p-1 sm:p-2 rounded-full">
											<Package className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
										</div>
										<span className="font-bold text-sm sm:text-xl text-primary group-hover:text-primary/80 transition-colors">
											Pedido {order.code}
										</span>
									</div>

									<div className="flex flex-wrap items-center gap-4">
										<Badge
											className={`${getOrderStateVariant(order.state)} mt-2 flex items-center gap-1 px-1 sm:px-3 py-1`}
										>
											<Box className="h-3 w-3" />
											{getOrderStateText(order.state)}
										</Badge>
										<div
											className="flex flex-col gap-1
										"
										>
											<p className="text-xs sm:text-sm text-primary">
												Última actualización:
											</p>
											<Badge
												variant={"default"}
												className="text-secondary"
											>
												{formatDate(
													order.lastUpdateDate,
													"yymmdd",
												)}
											</Badge>
										</div>
									</div>
								</div>
							</div>

							<div className="flex gap-2 items-center w-full sm:justify-end justify-start text-right">
								<p className="text-sm text-primary">
									Total del pedido:
								</p>
								<span className="font-black text-primary text-lg sm:text-2xl">
									{fCurrency(order.totalMount)}
								</span>
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
