import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Props {
	title?: string
	description?: string
}

export function AlertDestructive({ title = "Error", description }: Props) {
	return (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>{title}</AlertTitle>
			{description && <AlertDescription>{description}</AlertDescription>}
		</Alert>
	)
}
