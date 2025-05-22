"use client"

import {
	useRef,
	useState,
	useEffect,
	type ChangeEvent,
	type KeyboardEvent,
	type ClipboardEvent,
	type FormEvent,
} from "react"

export default function VerificationCode() {
	const [code, setCode] = useState<string[]>(Array(6).fill(""))
	// Tipado correcto para el array de refs
	const inputRefs = useRef<Array<HTMLInputElement | null>>([])

	// Inicializar los refs
	useEffect(() => {
		// Asegurarse de que el array tenga la longitud correcta
		inputRefs.current = Array(6).fill(null)
	}, [])

	const handleChange = (index: number, value: string) => {
		// Permitir solo números
		if (!/^\d*$/.test(value)) return

		const newCode = [...code]
		// Tomar solo el último carácter si se pega más de un dígito
		newCode[index] = value.substring(value.length - 1)
		setCode(newCode)

		// Mover al siguiente input si se ingresó un dígito
		if (value && index < 5) {
			const nextInput = inputRefs.current[index + 1]
			if (nextInput) {
				nextInput.focus()
			}
		}
	}

	const handleKeyDown = (
		index: number,
		e: KeyboardEvent<HTMLInputElement>,
	) => {
		// Mover al input anterior al presionar backspace en un input vacío
		if (e.key === "Backspace" && !code[index] && index > 0) {
			const prevInput = inputRefs.current[index - 1]
			if (prevInput) {
				prevInput.focus()
			}
		}
	}

	const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		const pastedData = e.clipboardData.getData("text/plain").trim()

		// Verificar si lo pegado son solo números y tiene la longitud correcta
		if (!/^\d+$/.test(pastedData)) return

		const digits = pastedData.split("").slice(0, 6)
		const newCode = [...code]

		digits.forEach((digit, index) => {
			if (index < 6) {
				newCode[index] = digit
			}
		})

		setCode(newCode)

		// Enfocar el último input o el siguiente después de los dígitos pegados
		const focusIndex = Math.min(digits.length, 5)
		const inputToFocus = inputRefs.current[focusIndex]
		if (inputToFocus) {
			inputToFocus.focus()
		}
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const completeCode = code.join("")
		console.log("Código enviado:", completeCode)
		// Aquí iría la lógica para verificar el código
	}

	// Función para manejar la referencia de cada input
	const setInputRef = (el: HTMLInputElement | null, index: number) => {
		inputRefs.current[index] = el
	}

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
				<div className="p-5">
					<div className="mb-3">
						<h2 className="text-xl font-bold text-gray-800 text-center">
							Código
						</h2>
					</div>

					<p className="text-sm text-gray-600 mb-4 text-center">
						Ingrese el código de verificación de 6 dígitos que fue
						enviado a su correo electrónico.
					</p>

					<form onSubmit={handleSubmit}>
						<div className="mb-5">
							<div className="flex justify-center">
								<div className="inline-flex gap-2">
									{Array(6)
										.fill(0)
										.map((_, index) => (
											<input
												key={index}
												ref={el =>
													setInputRef(el, index)
												}
												type="text"
												inputMode="numeric"
												maxLength={1}
												value={code[index]}
												onChange={(
													e: ChangeEvent<HTMLInputElement>,
												) =>
													handleChange(
														index,
														e.target.value,
													)
												}
												onKeyDown={(
													e: KeyboardEvent<HTMLInputElement>,
												) => handleKeyDown(index, e)}
												onPaste={
													index === 0
														? handlePaste
														: undefined
												}
												className="w-10 h-11 text-center text-lg font-medium border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
												required
											/>
										))}
								</div>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition duration-200"
						>
							Aceptar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
