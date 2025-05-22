"use client"

import type React from "react"

import { useState } from "react"

export default function PasswordResetForm() {
	const [email, setEmail] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Aquí iría la lógica para procesar el cambio de contraseña
		console.log("Solicitud de cambio de contraseña para:", email)
	}

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
				<div className="flex">
					{/* Contenido del formulario */}
					<div className="w-full p-8">
						<div className="mb-6">
							<h2 className="text-2xl font-bold text-gray-800">
								Cambiar Contraseña
							</h2>
						</div>

						<p className="text-gray-600 mb-6">
							Se enviará un enlace a su correo electrónico para
							cambiar su contraseña. El enlace será válido por 24
							horas.
						</p>

						<form onSubmit={handleSubmit}>
							<div className="mb-6">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									E-mail
								</label>
								<input
									id="email"
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
									placeholder="correo@ejemplo.com"
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
							>
								Aceptar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
