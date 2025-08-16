import { z } from "zod"

export interface Otp {
	otp: string
}

export const otpSchema = z.object({
	otp: z.string().min(6, { message: "El código debe de tener 6 dígitos" }),
})
