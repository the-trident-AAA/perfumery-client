"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Checkbox } from "@/src/components/ui/checkbox"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"

export default function RegisterForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Form submitted:", formData)
	}

	return (
		<div className="flex h-screen w-full overflow-hidden">
			{/* Lado izquierdo con la imagen */}
			<div className="relative hidden md:block md:w-1/2">
				<div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 opacity-10 z-10" />
				<img
					src="/images/place-holder.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 flex flex-col justify-center p-12 z-20">
					<h1 className="text-6xl font-bold text-white mb-2">
						Hello
						<br />
						World.
					</h1>
					<p className="text-white text-lg opacity-90 max-w-md">
						Lorem ipsum dolor sit amet consectetur. Adipiscing elit
						nunc in velit nunc porttitor.
					</p>
				</div>
			</div>

			{/* Lado derecho con el formulario */}
			<div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
				<div className="w-full max-w-md">
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-2">
							Register
						</h2>
						<p className="text-gray-600 text-sm">
							Don't have an account? Create your account, it takes
							less than a minute
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="space-y-2">
							<Label
								htmlFor="name"
								className="text-xs uppercase text-gray-500"
							>
								Name
							</Label>
							<Input
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="border-gray-300"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="text-xs uppercase text-gray-500"
							>
								Email ID
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								className="border-gray-300"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="password"
								className="text-xs uppercase text-gray-500"
							>
								Password
							</Label>
							<Input
								id="password"
								name="password"
								type="password"
								value={formData.password}
								onChange={handleChange}
								className="border-gray-300"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="confirmPassword"
								className="text-xs uppercase text-gray-500"
							>
								Confirm Password
							</Label>
							<Input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								value={formData.confirmPassword}
								onChange={handleChange}
								className="border-gray-300"
								required
							/>
						</div>

						<Button
							type="submit"
							className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full mt-8"
						>
							LOGIN
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
