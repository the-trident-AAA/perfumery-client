"use client"

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/components/ui/form"
import { Textarea } from "@/src/components/ui/textarea"
import { useFormContext } from "react-hook-form"

interface Props {
	name: string
	label?: string
	placeholder?: string
	description?: string
	fullWidth?: boolean
	rows?: number
}

export function RHFTextAreaField({
	name,
	label,
	placeholder,
	description,
	fullWidth = true,
	rows = 4,
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
						<Textarea
							rows={rows}
							className={`${fullWidth ? "w-full" : ""}`}
							placeholder={placeholder}
							{...field}
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
