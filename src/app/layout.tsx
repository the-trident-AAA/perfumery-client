import { FC, PropsWithChildren } from "react"
import "../ui/globals.css"
import { roboto } from "../ui/fonts"
import Header from "../sections/root-layout/components/header/header"
import Footer from "@/src/sections/root-layout/components/footer/footer"
import { ModalProvider } from "@/src/components/modal/context/modalContext"

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html>
			<body className={`${roboto.className} antialiased`}>
				<ModalProvider>
					<main className="flex min-h-screen flex-col">
						<Header />
						<div className="container mx-auto mt-5 px-3">
							{children}
						</div>
						<Footer />
					</main>
				</ModalProvider>
			</body>
		</html>
	)
}

export default RootLayout
