import { FC, PropsWithChildren, Suspense } from "react"
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
import { PerfumesFiltersProvider } from "@/src/sections/perfumes/filters/context/perfumes-filters-context"
import OrdersContent from "@/src/sections/orders/orders-content"
import { UserTotalOrdersProvider } from "@/src/sections/orders/context/user-total-orders-context"
import ProgressBar from "@/src/components/providers/progress-bar."
import { ProfileProvider } from "@/src/sections/auth/context/profile-context/profile-context"
import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Perfumes del Puro",
	description: "Tienda de Perfumes",
}

const RootLayout: FC<PropsWithChildren & { modal: React.ReactNode }> = ({
	children,
	modal,
}) => {
	return (
		<html>
			<body className={`${roboto.className} antialiased`}>
				<SessionProvider>
					<ProfileProvider>
						<ShopCartProvider>
							<Suspense fallback={<div>Cargando...</div>}>
								<PerfumesFiltersProvider>
									<ModalProvider>
										<ShopCartTotalItemsProviderContainer>
											<UserTotalOrdersProvider>
												<ToastContainer />
												<ProgressBar>
													<main className="flex min-h-screen flex-col">
														<Header />
														{modal}
														{children}
														<Footer />
														<Modal
															formPath={
																modalTypes
																	.loginModal
																	.name
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
																	.ordersModal
																	.name
															}
															maxWidth="max-w-3xl"
														>
															<OrdersContent variant="modal" />
														</Modal>
													</main>
												</ProgressBar>
											</UserTotalOrdersProvider>
										</ShopCartTotalItemsProviderContainer>
									</ModalProvider>
								</PerfumesFiltersProvider>
							</Suspense>
						</ShopCartProvider>
					</ProfileProvider>
				</SessionProvider>
			</body>
		</html>
	)
}

export default RootLayout
