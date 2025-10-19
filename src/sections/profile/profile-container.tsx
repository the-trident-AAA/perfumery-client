import { SearchParamsPagination } from "@/src/lib/types/pagination"
import ProfileAdditionalInformation from "@/src/sections/profile/profile-additional-information/profile-additional-information"
import ProfileInformationSection from "@/src/sections/profile/profile-information-section/profile-information-section"
import React from "react"

interface Props {
	searchParams: SearchParamsPagination
}

export default function ProfileContainer({ searchParams }: Props) {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-2">
			<ProfileInformationSection />
			<ProfileAdditionalInformation searchParams={searchParams} />
		</div>
	)
}
