export const apiRoutes = {
	auth: {
		login: `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
		loginWithGoogle: `${process.env.NEXT_PUBLIC_API_URL}auth/login-with-google`,
		register: `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
		verifyStateAccount: `${process.env.NEXT_PUBLIC_API_URL}auth/verify-state-account`,
		changePasswordUser: `${process.env.NEXT_PUBLIC_API_URL}auth/change-password-user/:id`,
		sendOtp: `${process.env.NEXT_PUBLIC_API_URL}auth/send-otp`,
		verifyOtp: `${process.env.NEXT_PUBLIC_API_URL}auth/verify-otp`,
		checkOtp: `${process.env.NEXT_PUBLIC_API_URL}auth/check-otp`,
		resetPassword: `${process.env.NEXT_PUBLIC_API_URL}auth/reset-password`,
		activateAccount: `${process.env.NEXT_PUBLIC_API_URL}auth/activate-account`,
		verifyEmail: `${process.env.NEXT_PUBLIC_API_URL}auth/verify-email`,
	},
	perfumes: {
		get: `${process.env.NEXT_PUBLIC_API_URL}perfume`,
		getBestSellers: `${process.env.NEXT_PUBLIC_API_URL}perfume/best-sellers`,
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
		getMainHomeBanner: `${process.env.NEXT_PUBLIC_API_URL}home-banner/find-main-home-banner`,
	},
	shopCarts: {
		getById: `${process.env.NEXT_PUBLIC_API_URL}shop-cart/:id`,
		getAnonymousShopCart: `${process.env.NEXT_PUBLIC_API_URL}shop-cart/find-anonymous-shop-cart`,
		getTotalItems: `${process.env.NEXT_PUBLIC_API_URL}shop-cart/total-items/:id`,
		getAnonymousShopCartTotalItems: `${process.env.NEXT_PUBLIC_API_URL}shop-cart/total-items-anonymous`,
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
		getOrdersNotSeenByUser: `${process.env.NEXT_PUBLIC_API_URL}order/orders-not-seen-by-user`,
		updateUserOrdersAsViews: `${process.env.NEXT_PUBLIC_API_URL}order/update-user-orders-as-views`,
	},
	users: {
		getById: `${process.env.NEXT_PUBLIC_API_URL}users/:id`,
		getByIdWithoutRelations: `${process.env.NEXT_PUBLIC_API_URL}users/find-one-without-relations/:id`,
		edit: `${process.env.NEXT_PUBLIC_API_URL}users/:id`,
	},
	tapes: {
		get: `${process.env.NEXT_PUBLIC_API_URL}tape`,
		getById: `${process.env.NEXT_PUBLIC_API_URL}tape/:id`,
		getMainTape: `${process.env.NEXT_PUBLIC_API_URL}tape/find-main-tape`,
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
	tapes: {
		singleTag: "tape",
		multipleTag: "tapes",
	},
} as const
