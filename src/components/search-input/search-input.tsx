"use client"
import { SearchIcon, X } from "lucide-react"
import React, { useState } from "react"

export default function SearchInput() {
	const [query, setQuery] = useState("")
	return (
		<div className="relative w-full">
			<input
				type="text"
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder="Buscar..."
				className="w-full h-8 sm:h-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
			/>
			<SearchIcon className="absolute left-3 top-1.5 sm:top-2.5 h-5 w-5 text-gray-700" />
			{query && (
				<button
					onClick={() => setQuery("")}
					className="absolute right-3 top-2.5 text-gray-700 hover:text-gray-900"
				>
					<X className="h-5 w-5" />
				</button>
			)}
		</div>
	)
}
