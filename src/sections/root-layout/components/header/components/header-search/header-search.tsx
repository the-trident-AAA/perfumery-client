"use client"
import { Search as SearchIcon } from "lucide-react"
import useHeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/hooks/use-header-search"
import SearchInput from "@/src/components/inputs/search-input/search-input"
import { useRouter, useSearchParams } from "next/navigation"
import { paths } from "@/src/lib/routes/paths"
import { useState, useEffect, ChangeEvent } from "react"
import { Gender } from "@/src/lib/types/perfumes"
import PopoverContainer from "@/src/components/ui/popover-container"

const HeaderSearch = () => {
	const [search, setSearch] = useState("")
	const router = useRouter()
	const searchParams = useSearchParams()
	const { isMobile } = useHeaderSearch()

	useEffect(() => {
		const nameParam = searchParams.get("name")
		setSearch(nameParam || "")
	}, [searchParams])

	const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
		const limit = searchParams.get("limit")
		// get the current filters
		const perfumTypeParam = searchParams.get("perfumeTypeId")
		const brandParam = searchParams.get("brandId")
		const genderParam = searchParams.get("gender") as Gender | null
		const offerParam = searchParams.get("offerId")
		const availableParam = searchParams.get("available")
		router.push(
			paths.perfumes({
				...(e.target.value && { name: e.target.value }),
				...(brandParam && { brandId: brandParam }),
				...(offerParam && { offerId: offerParam }),
				...(perfumTypeParam && {
					perfumeTypeId: perfumTypeParam,
				}),
				...(genderParam && {
					gender: genderParam,
				}),
				...(availableParam !== null && {
					available: availableParam === "true" ? "true" : "false",
				}),
				...(limit && {
					limit,
				}),
			}).root,
		)
	}

	return !isMobile ? (
		<SearchInput
			id="name"
			value={search}
			placeHolder="Comience a buscar perfumes..."
			onChange={changeSearchInput}
		/>
	) : (
		<PopoverContainer
			trigger={
				<SearchIcon className="size-7 sm:size-8 lg:size-12 text-secondary" />
			}
		>
			<SearchInput
				id="name"
				value={search}
				placeHolder="Comience a buscar..."
				onChange={changeSearchInput}
			/>
		</PopoverContainer>
	)
}

export default HeaderSearch
