import { Order } from "@/src/lib/types/orders"

export function formatOrderMessage(order: Order) {
	const intro = `Hola, soy *${order.user.username}* y deseo el siguiente pedido:\n\n`

	const header = `*Pedido*: ${order.id}\n*Email*: ${order.user.email}\n\n`

	const itemsIntro = `*** Perfumes del Pedido *** \n\n`

	const items = order.orderPerfumes
		.map((item, index) => {
			const total = item.perfume.price * item.cant
			const scents =
				item.perfume.scents?.map((s: any) => s.name).join(", ") ||
				"Sin especificar"
			return `*${index + 1}.* ${item.perfume.name} - ${item.perfume.brand.name}\n    Cantidad: ${item.cant}\n    Precio: $${item.perfume.price}\n    Subtotal: $${total}\n    Aromas: ${scents}`
		})
		.join("\n\n")

	const totalGeneral = order.orderPerfumes.reduce(
		(acc: number, item: any) => acc + item.perfume.price * item.cant,
		0,
	)

	const footer = `\n\n *Total del pedido*: $${totalGeneral}`

	return intro + itemsIntro + header + items + footer
}
