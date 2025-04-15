"use client"

import type React from "react"
import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { UserCircle2Icon } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { ModalContext } from "@/src/components/modal/context/modalContext"
import { modalTypes } from "@/src/components/modal/types/modalTypes"

export default function LoginForm() {
	const { handleOpenModal } = useContext(ModalContext)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Login attempt with:", { username, password })
	}

	return (
		<div className="w-full bg-green-50 border border-green-200 rounded-lg shadow-sm overflow-hidden mt-2">
			<div className="relative h-44">
				<div className="absolute inset-0">
					<Image
						src="/images/place-holder.jpg"
						alt="Header"
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>
			</div>

			<div className="pt-4 px-5">
				<div className="pt-4 px-5">
					<h2 className="text-xl font-semibold text-center">
						Iniciar Sesión
					</h2>
				</div>
			</div>

			<div className="p-5">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-1">
						<input
							id="username"
							placeholder="Username"
							value={username}
							onChange={e => setUsername(e.target.value)}
							required
							className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
						/>
					</div>
					<div className="space-y-1">
						<input
							id="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
							className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
						/>
					</div>
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
					>
						Iniciar Sesión
					</Button>
				</form>
			</div>

			<div className="flex flex-col items-center space-y-3 p-5 pt-0 pb-5">
				<Button
					variant="link"
					className="text-xs text-gray-500 hover:text-gray-700 p-0 h-auto"
					onClick={() => router.push("/forgot-password")}
				>
					Olvidó su contraseña?
				</Button>
				<div className="flex items-center space-x-2">
					<span className="text-xs text-gray-500">
						No tiene una cuenta?
					</span>
					<Button
						variant="default"
						className="h-7 bg-pink-500 hover:bg-pink-600 px-3 py-1 text-xs font-medium"
						onClick={() => {
							handleOpenModal({
								name: modalTypes.registrationModal.name,
							})
						}}
					>
						Crear
					</Button>
				</div>
			</div>
		</div>
	)
}
