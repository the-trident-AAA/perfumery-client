"use client"

import { DialogDescription, DialogTitle } from "@/src/components/ui/dialog"
import { Button } from "@/src/components/ui/button"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

export type AlertType = "info" | "success" | "warning" | "error"

interface Props {
	onClose: () => void
	title: string
	description: string
	type?: AlertType
	buttonText?: string
}

const alertConfig = {
	info: {
		icon: Info,
		iconColor: "text-blue-500",
		bgColor: "bg-blue-50 dark:bg-blue-950/20",
	},
	success: {
		icon: CheckCircle2,
		iconColor: "text-green-500",
		bgColor: "bg-green-50 dark:bg-green-950/20",
	},
	warning: {
		icon: AlertCircle,
		iconColor: "text-amber-500",
		bgColor: "bg-amber-50 dark:bg-amber-950/20",
	},
	error: {
		icon: XCircle,
		iconColor: "text-red-500",
		bgColor: "bg-red-50 dark:bg-red-950/20",
	},
}

export function AlertContent({
	onClose,
	title,
	description,
	type = "info",
	buttonText = "Continuar",
}: Props) {
	const config = alertConfig[type]
	const Icon = config.icon

	return (
		<div>
			<div className="flex flex-col gap-6 p-4 pb-1">
				<div>
					<div className="flex items-start gap-4">
						<div className={`rounded-full p-2 ${config.bgColor}`}>
							<Icon className={`h-6 w-6 ${config.iconColor}`} />
						</div>
						<div className="flex-1 space-y-2">
							<DialogTitle className="text-left text-xl">
								{title}
							</DialogTitle>
							<DialogDescription className="text-left text-base leading-relaxed">
								{description}
							</DialogDescription>
						</div>
					</div>
				</div>
				<div className="flex sm:justify-end">
					<Button
						variant={"secondary"}
						onClick={onClose}
						className="w-full text-primary sm:w-auto"
					>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	)
}
