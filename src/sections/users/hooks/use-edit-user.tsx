"use client"
import { editUser as editUserService } from "@/src/lib/services/users"
import { convertUserEditDTO } from "@/src/lib/types/users"
import { UserEdit } from "@/src/sections/users/form/edit/schemas/edit-user-schema"
import { useCallback, useState } from "react"

interface Props {
	id: string
	onEditAction: () => void
}

export default function useEditUser({ id, onEditAction }: Props) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const editUser = useCallback(
		async (user: UserEdit) => {
			const { avatar, ...rest } = user
			try {
				setLoading(true)
				setError(null)
				const formData = new FormData()
				if (avatar) formData.append("avatar", avatar)
				const res = await editUserService(
					id,
					convertUserEditDTO(rest),
					formData,
				)
				if (!res.response || res.error)
					setError(
						res.error?.reason || "Error en la edición del usuario",
					)
				else {
					onEditAction()
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		},
		[onEditAction, id],
	)
	return {
		loading,
		error,
		editUser,
	}
}
