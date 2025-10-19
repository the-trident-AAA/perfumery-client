import { SearchParamsPagination } from "@/src/lib/types/pagination"
import ModalWrapper from "@/src/sections/modal-page/components/modal-wrapper/modal-wrapper"
import OrdersContent from "@/src/sections/orders/orders-content"
import React from "react"

type Props = {
	searchParams: Promise<SearchParamsPagination>
}

export default async function OrdersModalPage({ searchParams }: Props) {
	return (
		<ModalWrapper>
			<OrdersContent searchParams={await searchParams} variant="modal" />
		</ModalWrapper>
	)
}
