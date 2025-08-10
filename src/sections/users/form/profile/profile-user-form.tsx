"use client"

import { User as UserIcon } from "lucide-react"
import { AlertDestructive } from "@/src/components/ui/alert-destructive"
import { RHFTextField } from "@/src/components/form/rhf-components/rhf-text-field/rhf-text-field"
import { User } from "@/src/lib/types/users"

interface Props {
	user: User
	error?: string | null
}

export default function UserProfileModal({ error, user }: Props) {
	return (
		<div className="w-full">
			<div className="flex flex-col gap-4">
				{error && <AlertDestructive title={error} />}
				<div className="pb-4">
					<div className="flex items-center gap-2 text-lg">
						<UserIcon className="w-5 h-5" />
						Información Personal
					</div>
				</div>
				<div className="space-y-4">
					<div className="space-y-2">
						<RHFTextField
							name="username"
							label="Nombre de Usuario"
							fullWidth
						/>
					</div>
					<div className="space-y-2">
						<p>{user.email}</p>
						<p className="text-xs text-muted-foreground">
							El email no puede ser modificado
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
