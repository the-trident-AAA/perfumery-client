import { Perfume } from "@/src/lib/types/perfumes"

export interface OrderPerfume {
	id: string
	perfume: Perfume
	cant: number
}
