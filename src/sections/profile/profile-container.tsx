import ProfileAdditionalInformation from "@/src/sections/profile/profile-additional-information/profile-additional-information"
import ProfileInformationSection from "@/src/sections/profile/profile-information-section/profile-information-section"
import React from "react"

export default function ProfileContainer() {
	return (
		<div className="flex flex-col lg:flex-row gap-8 p-2">
			<ProfileInformationSection />
			<ProfileAdditionalInformation />
		</div>
	)
}
