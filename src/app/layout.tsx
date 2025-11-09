import { FC, PropsWithChildren } from "react"
import "../ui/globals.css"
import { roboto } from "../ui/fonts"
import Header from "../sections/root-layout/components/header/header"
import Footer from "@/src/sections/root-layout/components/footer/footer"
import { ModalProvider } from "@/src/components/modal/context/modalContext"
import Modal from "@/src/components/modal/modal"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import LoginPanel from "@/src/components/login-panel/login-panel"
import RegistrationPanel from "@/src/components/registration-panel/registration-panel"
import ShopCartContent from "@/src/sections/shop-cart/shop-cart-content"
import { SessionProvider } from "next-auth/react"
import ShopCartTotalItemsProviderContainer from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-provider-container"
import { ToastContainer } from "react-toastify"
import ClearShopCartModalContainer from "@/src/sections/shop-cart/clear-shop-cart/clear-shop-cart-modal-container"
import { ShopCartProvider } from "@/src/sections/shop-cart/context/shop-cart-context/shop-cart-context"
import { UserTotalOrdersProvider } from "@/src/sections/orders/context/user-total-orders-context"
import ProgressBar from "@/src/components/providers/progress-bar."
import { ProfileProvider } from "@/src/sections/auth/context/profile-context/profile-context"
import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"
import { OrdersNotSeenByUserProvider } from "@/src/sections/orders/context/orders-not-seen-by-user-context"
import AlertModalSignInContainer from "@/src/sections/sign-in/components/alert-modal-sign-in-container"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Perfumes del Puro | Fragancias originales y exclusivas en La Habana",
	description:
		"Descubre Perfumes del Puro, tu tienda online de fragancias auténticas. Compra perfumes de diseñador con descuentos y envíos rápidos.",
	keywords: [
		"perfumes originales",
		"tienda de perfumes online",
		"fragancias exclusivas",
		"Perfumes del Puro",
	],
	openGraph: {
		type: "website",
		url: "https://perfumesdelpuro.com/",
		title: "Perfumes del Puro | Fragancias originales y exclusivas",
		description:
			"Explora nuestra colección de perfumes auténticos de diseñador. Envíos rápidos y descuentos exclusivos.",
		siteName: "Perfumes del Puro",
		images: [
			{
				url: "https://perfumesdelpuro.com/images/og-image-home.png",
				width: 1200,
				height: 630,
				alt: "Perfumes del Puro - tienda online de fragancias",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@perfumesdelpuro",
		title: "Perfumes del Puro | Fragancias originales y exclusivas",
		description:
			"Tu tienda online de perfumes originales. Descubre fragancias únicas para cada estilo.",
		images: ["https://perfumesdelpuro.com/images/og-image-home.png"],
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	other: {
		"application/ld+json": JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Organization",
			name: "Perfumes del Puro",
			image: "https://perfumesdelpuro.com/images/og-image-home.png",
			url: "https://perfumesdelpuro.com",
			logo: "https://perfumesdelpuro.com/favicon.ico",
			sameAs: [
				"https://www.facebook.com/perfumesdelpuro",
				"https://www.instagram.com/perfumesdelpuro",
			],
		}),
	},
	metadataBase: new URL("https://perfumesdelpuro.com"),
}

const RootLayout: FC<PropsWithChildren & { modal: React.ReactNode }> = ({
	children,
	modal,
}) => {
	return (
		<html>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Perfumes del Puro",
							image: "https://perfumesdelpuro.com/images/og-image-home.png",
							url: "https://perfumesdelpuro.com",
							logo: "https://perfumesdelpuro.com/favicon.ico",
							sameAs: [
								"https://www.facebook.com/perfumesdelpuro",
								"https://www.instagram.com/perfumesdelpuro",
							],
						}),
					}}
				/>
			</head>
			<body className={`${roboto.className} antialiased`}>
				<SessionProvider>
					<ProfileProvider>
						<ShopCartProvider>
							<ModalProvider>
								<ShopCartTotalItemsProviderContainer>
									<OrdersNotSeenByUserProvider>
										<UserTotalOrdersProvider>
											<ToastContainer />
											<ProgressBar>
												<main className="flex min-h-screen font-serif text-balance leading-tight flex-col">
													<Header />
													{modal}
													{children}
													<Footer />
													<Modal
														formPath={
															modalTypes
																.loginModal.name
														}
														maxWidth="max-w-sm"
													>
														<LoginPanel />
													</Modal>
													<Modal
														formPath={
															modalTypes
																.registrationModal
																.name
														}
														maxWidth="max-w-6xl"
													>
														<RegistrationPanel />
													</Modal>
													<Modal
														formPath={
															modalTypes
																.shopCartModal
																.name
														}
														maxWidth="max-w-6xl"
													>
														<ShopCartContent variant="modal" />
													</Modal>
													<Modal
														formPath={
															modalTypes
																.changePasswordModal
																.name
														}
														maxWidth="max-w-xl"
													>
														Modal de olvido de
														contraseña
													</Modal>
													<Modal
														formPath={
															modalTypes
																.clearShopCartModal
																.name
														}
														maxWidth="max-w-xl"
													>
														<ClearShopCartModalContainer />
													</Modal>
													<Modal
														formPath={
															modalTypes
																.alertCreateOrderModal
																.name
														}
													>
														<AlertModalSignInContainer />
													</Modal>
												</main>
											</ProgressBar>
										</UserTotalOrdersProvider>
									</OrdersNotSeenByUserProvider>
								</ShopCartTotalItemsProviderContainer>
							</ModalProvider>
						</ShopCartProvider>
					</ProfileProvider>
				</SessionProvider>
			</body>
		</html>
	)
}

export default RootLayout
