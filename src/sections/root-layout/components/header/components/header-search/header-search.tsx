"use client"
import { Search as SearchIcon } from "lucide-react"
import useHeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/hooks/use-header-search"
import SearchInput from "@/src/components/inputs/search-input/search-input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { paths } from "@/src/lib/routes/paths"
import { useState, useEffect } from "react"

const HeaderSearch = () => {
	const [search, setSearch] = useState("")
	const router = useRouter()
	const currentPath = usePathname()
	const searchParams = useSearchParams()
	const { isMobile, toggleSearch, searchRef, showSearch } = useHeaderSearch()

	useEffect(() => {
		const nameParam = searchParams.get("name")
		if (nameParam !== null) {
			setSearch(nameParam)
		}
	}, [searchParams])

	return !isMobile ? (
		<SearchInput
			id="name"
			value={search}
			placeHolder="Comience a buscar perfumes..."
			onChange={e => {
				setSearch(e.target.value)
				router.push(
					paths.perfumes({
						...(e.target.value && { name: e.target.value }),
					}).root,
				)
			}}
		/>
	) : (
		<div className="relative" ref={searchRef}>
			<button
				onClick={toggleSearch}
				className={`p-2 rounded-full hover:bg-gray-100`}
				aria-label="Buscar"
			>
				<SearchIcon className="size-8 sm:size-12 text-white" />
			</button>
			{showSearch && (
				<div className="absolute top-full right-[-50px] mt-2 w-64 text-black bg-white shadow-lg rounded-lg p-2 z-10 border border-gray-200">
					<SearchInput
						id="name"
						value={search}
						placeHolder="Comience a buscar perfumes..."
						onChange={e => {
							setSearch(e.target.value)
							router.push(
								paths.perfumes({
									...(e.target.value && {
										name: e.target.value,
									}),
								}).root,
							)
						}}
					/>
				</div>
			)}
		</div>
	)
}

export default HeaderSearch
