"use client"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

export type AlertType = "info" | "success" | "warning" | "error"

interface AlertModalProps {
	isOpen: boolean
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

export function AlertModal({
	isOpen,
	onClose,
	title,
	description,
	type = "info",
	buttonText = "Continuar",
}: AlertModalProps) {
	const config = alertConfig[type]
	const Icon = config.icon

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
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
				</DialogHeader>
				<DialogFooter className="sm:justify-end">
					<Button onClick={onClose} className="w-full sm:w-auto">
						{buttonText}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
