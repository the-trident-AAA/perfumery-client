"use client"
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { useFormContext } from "react-hook-form"

interface Props {
	name: string
	label?: string
	placeholder?: string
	description?: string
	fullWidth?: boolean
}

export function RHFNumberField({
	name,
	label,
	placeholder,
	description,
	fullWidth = true,
}: Props) {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={`${fullWidth ? "w-full" : ""}`}>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input
							type="number"
							className={`${fullWidth ? "w-full" : ""}`}
							placeholder={placeholder}
							{...field}
							onChange={e =>
								field.onChange(Number(e.target.value))
							}
						/>
					</FormControl>
					{description && (
						<FormDescription>{description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
