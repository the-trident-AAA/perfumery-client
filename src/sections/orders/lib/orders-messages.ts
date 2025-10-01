import { Order } from "@/src/lib/types/orders"

export function formatOrderMessage(
	order: Order,
	mode: "create" | "edit" = "create",
) {
	const intro =
		mode === "create"
			? `Hola, soy *${order.user.username}* y deseo el siguiente pedido:\n\n`
			: `Hola, soy *${order.user.username}* y aquí presento una edición de mi Pedido:\n\n`

	const header = `*Pedido*: ${order.id}\n*Email*: ${order.user.email}\n\n`

	const itemsIntro = `*** Perfumes del Pedido *** \n\n`

	const items = order.orderPerfumes
		.map((item, index) => {
			const total = item.price
			const scents =
				item.perfume.scents?.map((s: any) => s.name).join(", ") ||
				"Sin especificar"
			return `*${index + 1}.* ${item.perfume.name} - ${item.perfume.brand.name}\n    Cantidad: ${item.cant}\n    Precio: $${item.perfume.totalPrice}\n    Subtotal: $${total}\n    Aromas: ${scents}`
		})
		.join("\n\n")

	const totalGeneral = order.totalMount

	const footer = `\n\n *Total del pedido*: $${totalGeneral}`

	return intro + header + itemsIntro + items + footer
}
