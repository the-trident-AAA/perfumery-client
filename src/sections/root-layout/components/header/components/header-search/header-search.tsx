"use client"
import { Search as SearchIcon } from "lucide-react"
import SearchInput from "@/src/components/search-input/search-input"
import useHeaderSearch from "@/src/sections/root-layout/components/header/components/header-search/hooks/use-header-search"

const HeaderSearch = () => {
	const { isMobile, toggleSearch, searchRef, showSearch } = useHeaderSearch()

	return !isMobile ? (
		<SearchInput />
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
				<div className="absolute top-full right-[-50px] mt-2 w-64 bg-white shadow-lg rounded-lg p-2 z-10 border border-gray-200">
					<SearchInput />
				</div>
			)}
		</div>
	)
}

export default HeaderSearch
