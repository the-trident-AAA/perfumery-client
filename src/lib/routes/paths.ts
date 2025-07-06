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

function replaceParamsInPath(
	path: string,
	params: Record<string, string> = {},
): string {
	return Object.entries(params).reduce((acc, [key, value]) => {
		return acc.replace(`[${key}]`, value)
	}, path)
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
	const [routeWithoutQuery, _] = route.split("?")

	// Primero intentamos hacer match con rutas estáticas
	for (const key in paths) {
		const path = paths[key as keyof ApplicationPath]

		if (typeof path !== "function") {
			if (path.root === routeWithoutQuery) {
				return path.isProtected
			}
		}
	}

	// Luego intentamos con rutas dinámicas
	for (const key in paths) {
		const path = paths[key as keyof ApplicationPath]

		if (typeof path === "function") {
			// Obtenemos el path base sin parámetros reemplazados
			const basePath = path({} as any).root.split("?")[0]

			// Creamos un regex para hacer match con los parámetros
			const regexPattern =
				basePath
					.replace(/\[([^\]]+)\]/g, "([^/]+)")
					.replace(/\//g, "\\/") + "$"

			const regex = new RegExp(regexPattern)

			if (regex.test(routeWithoutQuery)) {
				const pathObj = path({} as any)
				return pathObj.isProtected
			}
		}
	}

	return false
}
