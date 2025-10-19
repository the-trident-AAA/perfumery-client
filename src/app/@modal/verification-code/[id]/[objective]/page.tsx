import ModalWrapper from "@/src/sections/modal-page/components/modal-wrapper/modal-wrapper"
import VerificationCodeContainer from "@/src/sections/verification-code/verification-code-container"
import React from "react"

type Props = {
	params: Promise<{ id: string; objective: "activate" | "change-password" }>
}

export default async function VerificationCodePage({ params }: Props) {
	const { id: userId, objective } = await params

	return (
		<ModalWrapper>
			<>
				<VerificationCodeContainer
					userId={userId}
					objective={objective}
				/>
			</>
		</ModalWrapper>
	)
}
