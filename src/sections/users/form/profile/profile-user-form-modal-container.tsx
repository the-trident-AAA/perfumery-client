"use client"

import React, { useContext } from "react"
import ProfileUserFormContainer from "./profile-user-form-container"
import { FetchingDataErrorPanel } from "@/src/components/fetching-data-error-panel/fetching-data-error-panel"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { LoadingSpinner } from "@/src/components/ui/loading-spinner"
import useUserProfile from "@/src/sections/users/hooks/use-user-profile"

export default function ProfileUserModalContainer() {
	const { getInfoModal } = useContext(ModalContext)
	const infoModal = getInfoModal(modalTypes.profileUserModal.name)

	const refreshUserInfo =
		infoModal && infoModal.actionExecute ? infoModal.actionExecute : null
	const { user, loading, error, fetchUserProfile } = useUserProfile()

	return (
		<div className="flex flex-1 flex-col h-full w-full">
			{!loading ? (
				user && !error ? (
					<ProfileUserFormContainer
						user={user}
						refreshUserInfo={refreshUserInfo as () => Promise<void>}
					/>
				) : (
					<FetchingDataErrorPanel
						message={error as string}
						reset={fetchUserProfile}
					/>
				)
			) : (
				<div className="flex justify-center flex-1 items-center h-full w-full">
					<LoadingSpinner size={100} />
				</div>
			)}
		</div>
	)
}
