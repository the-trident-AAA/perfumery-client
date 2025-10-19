import SelectInput from "@/src/components/inputs/select-input/select-input"
import { getOrderStateText, OrderState } from "@/src/lib/types/orders"
import { OrdersFilters as OrdersFiltersType } from "@/src/sections/orders/filters/hooks/use-orders-filters"

interface Props {
	filters: OrdersFiltersType
	handleChangeFilters: (filters: Partial<OrdersFiltersType>) => void
}

export default function OrdersFilters({ filters, handleChangeFilters }: Props) {
	return (
		<div className="p-2">
			<SelectInput
				label="Estado"
				placeHolder="Seleccione un estado por el que filtrar..."
				value={filters.state}
				onValueChange={value => {
					handleChangeFilters({
						state: (value as OrderState) || undefined,
					})
				}}
				options={[
					{
						label: getOrderStateText(OrderState.COMPLETED),
						value: OrderState.COMPLETED,
					},
					{
						label: getOrderStateText(OrderState.PENDING),
						value: OrderState.PENDING,
					},
					{
						label: getOrderStateText(OrderState.CANCELED),
						value: OrderState.CANCELED,
					},
				]}
				clearable={{
					handleClear: () => {
						handleChangeFilters({ state: undefined })
					},
				}}
			/>
		</div>
	)
}
