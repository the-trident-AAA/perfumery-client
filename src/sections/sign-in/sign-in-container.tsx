import type React from "react"
import Image from "next/image"
import SignInFormContainer from "./form/sign-in-form-container"
import AppLogo from "@/src/components/app-logo/app-logo"
import Link from "next/link"
import { paths } from "@/src/lib/routes/paths"

export default function SignInContainer() {
	return (
		<div className="flex w-full h-screen">
			{/* Left Side - Form */}
			<div className="w-full md:w-1/2 flex items-center justify-center flex-col gap-12 p-10">
				<AppLogo withText={false} avatarClassName="h-42 w-42" />
				<SignInFormContainer />
				<div className="space-y-4">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t border-border" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-foreground">
								¿Nuevo aquí?
							</span>
						</div>
					</div>

					<div className="text-center">
						<Link
							href={paths.registration.root}
							className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 group"
						>
							No tienes cuenta? Regístrate aquí
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="transition-transform group-hover:translate-x-1"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</div>

			{/* Right side - Image */}
			<div className="hidden md:block md:w-1/2 bg-gray-100 relative">
				<Image
					src={"/images/place-holder.jpg"}
					alt="Login image"
					fill
					className="object-cover"
					priority
				/>
			</div>
		</div>
	)
}
