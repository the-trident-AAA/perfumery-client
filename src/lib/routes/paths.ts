interface Path {
	root: string
	isProtected: boolean
}

interface ApplicationPath {
	home: Path
	sign_in: (query?: Record<string, string | string[]>) => Path
	registration: Path
	perfume: (
		params?: Record<string, string>,
		query?: Record<string, string | string[]>,
	) => Path
	editProfile: Path
	verificationCode: (
		params?: Record<string, string>,
		query?: Record<string, string | string[]>,
	) => Path
	forgotPassword: (
		params?: Record<string, string>,
		query?: Record<string, string | string[]>,
	) => Path
	confirm_email: Path
	perfumes: (query?: Record<string, string | string[]>) => Path
	profile: Path
	orders: Path
}

function buildQueryString(
	query: Record<string, string | string[]> = {},
): string {
	const params = new URLSearchParams()

	for (const [key, value] of Object.entries(query)) {
		if (Array.isArray(value)) {
			for (const v of value) {
				params.append(key, v)
			}
		} else if (value !== undefined && value !== null) {
			params.append(key, value)
		}
	}

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
	sign_in: (query = {}) => {
		const basePath = "/sign-in"
		const queryString = buildQueryString(query)
		return {
			root: queryString ? `${basePath}?${queryString}` : basePath,
			isProtected: false,
		}
	},
	registration: {
		root: "/registration",
		isProtected: false,
	},
	perfume: (params = {}, query = {}) => {
		const basePath = "/perfumes/[id]"
		const pathWithParams = replaceParamsInPath(basePath, params)
		const queryString = buildQueryString(query)
		return {
			root: queryString
				? `${pathWithParams}?${queryString}`
				: pathWithParams,
			isProtected: false,
		}
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
	editProfile: {
		root: "/edit-profile",
		isProtected: true,
	},
	orders: {
		root: "/orders",
		isProtected: true,
	},
	verificationCode: (params = {}, query = {}) => {
		const basePath = "/verification-code/[id]/[objective]"
		const pathWithParams = replaceParamsInPath(basePath, params)
		const queryString = buildQueryString(query)
		return {
			root: queryString
				? `${pathWithParams}?${queryString}`
				: pathWithParams,
			isProtected: false,
		}
	},
	forgotPassword: (params = {}, query = {}) => {
		const basePath = "/forgot-password/[id]/[otp]"
		const pathWithParams = replaceParamsInPath(basePath, params)
		const queryString = buildQueryString(query)
		return {
			root: queryString
				? `${pathWithParams}?${queryString}`
				: pathWithParams,
			isProtected: false,
		}
	},
	confirm_email: {
		root: "/confirm-email",
		isProtected: false,
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
