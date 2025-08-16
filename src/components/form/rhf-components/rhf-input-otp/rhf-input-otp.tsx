"use client"

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/components/ui/form"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/src/components/ui/input-otp"
import { useFormContext } from "react-hook-form"

interface Props {
	name: string
	label?: string
	description?: string
	disabled?: boolean
	length?: number
}

export function RHFOTPField({
	name,
	label,
	description,
	disabled,
	length = 6,
}: Props) {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="w-full flex flex-col items-center gap-2">
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<InputOTP
							maxLength={length}
							value={field.value}
							onChange={field.onChange}
							disabled={disabled}
						>
							<InputOTPGroup>
								{Array.from({ length }).map((_, i) => (
									<InputOTPSlot key={i} index={i} />
								))}
							</InputOTPGroup>
						</InputOTP>
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
