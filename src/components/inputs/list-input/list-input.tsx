"use client"
import { Checkbox } from "@/src/components/ui/checkbox"
import { Label } from "@/src/components/ui/label"

interface Props {
	id: string
	label?: string
	values: string[]
	options: { value: string; label: string }[]
	handleValuesChange: (value: string, checked: boolean) => void
	loading?: boolean
}

export default function ListInput({
	id,
	label,
	values,
	options,
	handleValuesChange,
	loading = false,
}: Props) {
	return (
		<div className="space-y-3">
			{label && <Label className="text-secondary">{label}</Label>}

			{loading ? (
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className="flex items-center space-x-2"
						>
							<div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
							<div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
						</div>
					))}
				</div>
			) : options.length === 0 ? (
				<p className="text-sm text-gray-500">
					No hay opciones disponibles
				</p>
			) : (
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 gap-x-2 overflow-y-auto max-h-[200px] px-4">
					{options.map((option, index) => (
						<div
							key={index}
							className="flex items-center gap-2 min-w-0"
						>
							<Checkbox
								id={`${id}-${option.value}`}
								checked={values.includes(option.value) || false}
								onCheckedChange={checked => {
									handleValuesChange(
										option.value,
										checked as boolean,
									)
								}}
							/>
							<Label
								htmlFor={`${id}-${option.value}`}
								className="text-sm text-secondary font-normal leading-tight cursor-pointer min-w-0 block truncate"
								title={option.label}
							>
								{option.label}
							</Label>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
