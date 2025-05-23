interface Path {
	root: string
	isProtected: boolean
}

interface ApplicationPath {
	home: Path
	sign_in: Path
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
		isProtected: false,
	},
	sign_in: {
		root: "/sign-in",
		isProtected: false,
	},
	perfumes: (query = {}) => {
		const basePath = "/perfumes"
		const queryString = buildQueryString(query)
		return {
			root: queryString ? `${basePath}?${queryString}` : basePath,
			isProtected: false,
		}
	},
	profile: {
		root: "/profile",
		isProtected: true,
	},
} as const

export const isProtectedRoute = (route: string): boolean => {
	const routeWithoutQuery = route.split("?")[0]

	for (const key in paths) {
		const path = paths[key as keyof ApplicationPath]

		if (typeof path === "function") {
			const pathObj = path({})
			if (pathObj.root.split("?")[0] === routeWithoutQuery) {
				return pathObj.isProtected
			}
		} else {
			if (path.root === routeWithoutQuery) {
				return path.isProtected
			}
		}
	}

	return false
}
