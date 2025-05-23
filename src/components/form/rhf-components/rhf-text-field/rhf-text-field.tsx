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
	type?: "text" | "email" | "password"
	fullWidth?: boolean
}

export function RHFTextField({
	name,
	label,
	placeholder,
	description,
	type = "text",
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
							type={type}
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
