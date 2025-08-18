"use client"

import { Button } from "@/src/components/ui/button"
import React, { Dispatch, SetStateAction } from "react"
import { User } from "@/src/lib/types/users"
import { paths } from "@/src/lib/routes/paths"
import { useRouter } from "next/navigation"
import useSendOtp from "@/src/sections/auth/hooks/use-send-otp"

interface Props {
	setChangePasswordMode: Dispatch<SetStateAction<"form" | "reset" | null>>
	user: User
}

export default function ChangePasswordModeResetSection({
	setChangePasswordMode,
	user,
}: Props) {
	const router = useRouter()
	const { sendOtp, loading: loadingSendOtp } = useSendOtp({})
	return (
		<div className="space-y-4 p-4 border rounded-lg bg-muted/50">
			<div className="flex items-center justify-between">
				<h4 className="font-medium">Recuperar Contraseña</h4>
				<Button
					variant="secondary"
					className="text-primary"
					size="sm"
					onClick={() => setChangePasswordMode(null)}
				>
					Cancelar
				</Button>
			</div>

			<div className="space-y-3">
				<p className="text-sm text-secondary">
					Se enviará un código de recuperación a: <br />
					<strong>{user.email}</strong>
				</p>

				<Button
					variant={"secondary"}
					className=" text-primary w-full"
					disabled={loadingSendOtp}
					onClick={async () => {
						await sendOtp(user.id)
						router.push(
							paths.verificationCode({
								id: user.id,
								objective: "change-password",
							}).root,
						)
					}}
				>
					Enviar Enlace de Recuperación
				</Button>
			</div>
		</div>
	)
}
