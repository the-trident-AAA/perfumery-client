import { z } from "zod"

export type Credentials = z.infer<typeof credentialsSchema>
export const credentialsSchema = z.object({
	email: z.string().email(),
	password: z.string(),
})
