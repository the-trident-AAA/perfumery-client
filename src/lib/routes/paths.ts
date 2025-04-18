interface Path {
	root: string
}

interface ApplicationPath {
	home: Path
	perfumes: (query?: Record<string, string>) => Path
	profile: Path
}

function buildQueryString(query: Record<string, string> = {}): string {
	const params = new URLSearchParams(query)
	return params.toString()
}

export const paths: ApplicationPath = {
	home: {
		root: "/",
	},
	perfumes: (query = {}) => {
		const basePath = "/perfumes"
		const queryString = buildQueryString(query)
		return {
			root: queryString ? `${basePath}?${queryString}` : basePath,
		}
	},
	profile: {
		root: "/profile",
	},
} as const
