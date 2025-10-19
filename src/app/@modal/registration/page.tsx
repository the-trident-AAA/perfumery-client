import ModalWrapper from "@/src/sections/modal-page/components/modal-wrapper/modal-wrapper"
import RegistrationContainer from "@/src/sections/registration/registration-container"
import React from "react"

export default function RegistrationPage() {
	return (
		<ModalWrapper>
			<div>
				<RegistrationContainer />
			</div>
		</ModalWrapper>
	)
}
