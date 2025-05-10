import { z } from "zod"

export const { NEXT_PUBLIC_API_URL, AUTH_SECRET } = z
	.object({
		NEXT_PUBLIC_API_URL: z.string().url(),
		AUTH_SECRET: z.string().min(32),
	})
	.parse(process.env)
