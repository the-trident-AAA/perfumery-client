import { SearchParamsPagination } from "@/src/lib/types/pagination"
import ProfileContainer from "@/src/sections/profile/profile-container"
import React from "react"

export const dynamic = "force-dynamic"

type Props = {
	searchParams: Promise<SearchParamsPagination>
}

export default async function ProfilePage({ searchParams }: Props) {
	return <ProfileContainer searchParams={await searchParams} />
}
