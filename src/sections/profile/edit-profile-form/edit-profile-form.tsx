"use client"

import type React from "react"

import { useState } from "react"
import { User } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"

export default function ProfileEdit() {
	const [username, setUsername] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log({ username, firstName, lastName })
	}

	return (
		<Card className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
			<CardHeader className="flex flex-col items-center justify-center pt-4 bg-gradient-to-b from-green-50 to-white">
				<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
					<User className="w-8 h-8 text-blue-500" />
				</div>
				<CardTitle className="text-xl font-semibold text-center text-gray-800">
					Editar Perfil
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 ">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<label
							htmlFor="username"
							className="text-sm font-medium text-black pl-4 mb-1 block"
						>
							Nombre de usuario*
						</label>
						<Input
							id="username"
							placeholder="Nombre de usuario"
							value={username}
							onChange={e => setUsername(e.target.value)}
							className="w-full px-4 py-2 border rounded-md border-green-200 focus:outline-none focus:ring-2 focus:ring-green-100"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-black pl-4 mb-1 block"
						>
							Nombres*
						</label>
						<Input
							id="firstName"
							placeholder="Nombres"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							className="w-full px-4 py-2 border rounded-md border-green-200 focus:outline-none focus:ring-2 focus:ring-green-100"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="lastName"
							className="text-sm font-medium text-black pl-4 mb-1 block"
						>
							Apellidos*
						</label>
						<Input
							id="lastName"
							placeholder="Apellidos"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							className="w-full px-4 py-2 border rounded-md border-green-200 focus:outline-none focus:ring-2 focus:ring-green-100"
						/>
					</div>

					<div className="flex justify-center mt-2">
						<Button
							variant="link"
							type="button"
							className="text-sm text-gray-500 hover:text-blue-600"
						>
							¿Desea cambiar contraseña?
						</Button>
					</div>

					<Button
						type="submit"
						className="w-full py-2 mt-4 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Editar
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}
