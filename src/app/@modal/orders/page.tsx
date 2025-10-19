import ModalWrapper from "@/src/sections/modal-page/components/modal-wrapper/modal-wrapper"
import OrdersContent from "@/src/sections/orders/orders-content"
import React from "react"

export default function OrdersModalPage() {
	return (
		<ModalWrapper>
			<OrdersContent variant="modal" />
		</ModalWrapper>
	)
}
