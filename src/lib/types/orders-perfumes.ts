import { PerfumeDetails } from "@/src/lib/types/perfumes"

export interface OrderPerfume {
	id: string
	perfume: PerfumeDetails
	cant: number
	price: number
}
