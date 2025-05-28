import { FC, PropsWithChildren } from "react"
import "../ui/globals.css"
import { roboto } from "../ui/fonts"
import Header from "../sections/root-layout/components/header/header"
import Footer from "@/src/sections/root-layout/components/footer/footer"
import { ModalProvider } from "@/src/components/modal/context/modalContext"
import Modal from "@/src/components/modal/modal"
import { modalTypes } from "@/src/components/modal/types/modalTypes"
import PerfumDetailsContainer from "@/src/sections/perfumes/perfum-details/perfum-details-container/perfum-details-container"
import LoginPanel from "@/src/components/login-panel/login-panel"
import RegistrationPanel from "@/src/components/registration-panel/registration-panel"
import ShopCartContent from "@/src/sections/shop-cart/shop-cart-content"
import EditProfileForm from "@/src/sections/profile/edit-profile-form/edit-profile-form"
import ChangePasswordForm from "@/src/sections/profile/change-password-form/change-password-form"
import { SessionProvider } from "next-auth/react"
import ShopCartTotalItemsProviderContainer from "@/src/sections/shop-cart/context/shop-cart-total-items-context/shop-cart-total-items-provider-container"
import { ToastContainer } from "react-toastify"
import ClearShopCartModalContainer from "@/src/sections/shop-cart/clear-shop-cart/clear-shop-cart-modal-container"

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html>
			<body className={`${roboto.className} antialiased`}>
				<SessionProvider>
					<ModalProvider>
						<ShopCartTotalItemsProviderContainer>
							<main className="flex min-h-screen flex-col gap-8">
								<ToastContainer />
								<Header />
								<div className="md:container md:mx-auto px-3">
									{children}
								</div>
								<Footer />
								<Modal
									formPath={
										modalTypes.perfumDetailsModal.name
									}
									maxWidth="max-w-5xl"
								>
									<PerfumDetailsContainer />
								</Modal>
								<Modal
									formPath={modalTypes.loginModal.name}
									maxWidth="max-w-sm"
								>
									<LoginPanel />
								</Modal>
								<Modal
									formPath={modalTypes.registrationModal.name}
									maxWidth="max-w-6xl"
								>
									<RegistrationPanel />
								</Modal>
								<Modal
									formPath={modalTypes.shopCartModal.name}
									maxWidth="max-w-6xl"
								>
									<ShopCartContent variant="modal" />
								</Modal>
								<Modal
									formPath={modalTypes.editProfileModal.name}
									maxWidth="max-w-lg"
								>
									<EditProfileForm />
								</Modal>
								<Modal
									formPath={
										modalTypes.changePasswordModal.name
									}
									maxWidth="max-w-xl"
								>
									<ChangePasswordForm />
								</Modal>
								<Modal
									formPath={
										modalTypes.clearShopCartModal.name
									}
									maxWidth="max-w-xl"
								>
									<ClearShopCartModalContainer />
								</Modal>
							</main>
						</ShopCartTotalItemsProviderContainer>
					</ModalProvider>
				</SessionProvider>
			</body>
		</html>
	)
}

export default RootLayout
