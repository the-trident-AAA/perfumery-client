import { z } from "zod"

export const { API_URL, AUTH_SECRET } = z
	.object({
		API_URL: z.string().url(),
		AUTH_SECRET: z.string().min(32),
	})
	.parse(process.env)
