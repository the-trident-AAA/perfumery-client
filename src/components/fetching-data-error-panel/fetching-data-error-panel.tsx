"use client"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { AlertCircle, RefreshCw } from "lucide-react"

interface Props {
	message: string
	reset: () => void
}

export function FetchingDataErrorPanel({ message, reset }: Props) {
	return (
		<div className="container max-w-md mx-auto p-4">
			<Card className="bg-background">
				<CardContent className="p-6 flex flex-col items-center gap-4 text-center">
					<div className="relative">
						<AlertCircle
							className="h-16 w-16 text-destructive animate-pulse"
							style={{
								animation: "pulse 2s infinite",
							}}
						/>
					</div>

					<h2 className="text-xl font-semibold text-destructive">
						Error en la Petición
					</h2>

					<p className="text-muted-foreground">{message}</p>

					<Button
						variant={"secondary"}
						onClick={reset}
						className="mt-2 px-6 py-2 text-primary rounded-lg transition-transform hover:scale-105 duration-200"
					>
						<RefreshCw className="mr-2 h-4 w-4" />
						Reintentar
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}
