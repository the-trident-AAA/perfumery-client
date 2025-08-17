export const apiRoutes = {
	auth: {
		login: `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
		changePasswordUser: `${process.env.NEXT_PUBLIC_API_URL}auth/change-password-user/:id`,
		sendOtp: `${process.env.NEXT_PUBLIC_API_URL}auth/send-otp`,
		verifyOtp: `${process.env.NEXT_PUBLIC_API_URL}auth/verify-otp`,
		resetPassword: `${process.env.NEXT_PUBLIC_API_URL}auth/reset-password`,
	},
	perfumes: {
		get: `${process.env.NEXT_PUBLIC_API_URL}perfume`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}perfume/:id`,
	},
	brands: {
		get: `${process.env.NEXT_PUBLIC_API_URL}brand`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}brand/:id`,
	},
	scents: {
		get: `${process.env.NEXT_PUBLIC_API_URL}scent`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}scent/:id`,
	},
	perfumeTypes: {
		get: `${process.env.NEXT_PUBLIC_API_URL}perfume-type`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}perfume-type/:id`,
	},
	offers: {
		get: `${process.env.NEXT_PUBLIC_API_URL}offer`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}offer/:id`,
	},
	homeBanners: {
		get: `${process.env.NEXT_PUBLIC_API_URL}home-banner`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}home-banner/:id`,
	},
	shopCarts: {
		getById: `${process.env.NEXT_PUBLIC_API_URL}shop-cart/:id`,
	},
	shopCartPerfumes: {
		get: `${process.env.NEXT_PUBLIC_API_URL}shop-cart-perfume`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}shop-cart-perfume/:id`,
		clearShopCart: `${process.env.NEXT_PUBLIC_API_URL}shop-cart-perfume/clear-shop-cart/:id`,
	},
	orders: {
		get: `${process.env.NEXT_PUBLIC_API_URL}order`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}order/:id`,
		getUserTotalOrders: `${process.env.NEXT_PUBLIC_API_URL}order/user-total-orders`,
		getOrderPerfumes: `${process.env.NEXT_PUBLIC_API_URL}order/get-order-perfumes/:id`,
	},
	users: {
		getById: `${process.env.NEXT_PUBLIC_API_URL}users/:id`,
		getByIdWithoutRelations: `${process.env.NEXT_PUBLIC_API_URL}users/find-one-without-relations/:id`,
		edit: `${process.env.NEXT_PUBLIC_API_URL}users/:id`,
	},
} as const

export const tagsCacheByRoutes = {
	perfumes: {
		singleTag: "perfume",
		multipleTag: "perfumes",
	},
	brands: {
		singleTag: "brand",
		multipleTag: "brands",
	},
	scents: {
		singleTag: "scent",
		multipleTag: "scents",
	},
	perfumeTypes: {
		singleTag: "perfume-type",
		multipleTag: "perfume-types",
	},
	offers: {
		singleTag: "offer",
		multipleTag: "offers",
	},
	homeBanners: {
		singleTag: "home-banner",
		multipleTag: "home-banners",
	},
	shopCarts: {
		singleTag: `shop-cart`,
	},
	shopCartPerfumes: {
		singleTag: `shop-cart-perfume`,
	},
	orders: {
		singleTag: `order`,
		multipleTag: "orders",
		orderPerfumes: "order-perfumes",
	},
	users: {
		singleTag: "user",
		multipleTag: "users",
	},
} as const
