"use client"
import { useCallback, useState } from "react"
import { verifyStateAccount as verifyStateAccountService } from "@/src/lib/services/auth"
import { Credentials } from "@/src/sections/sign-in/form/schemas/credentials-schema"
import { useRouter } from "next/navigation"
import { Error } from "@/src/lib/types/api"
import { generateToken } from "@/src/lib/token"
import { paths } from "@/src/lib/routes/paths"

interface Props {
	onVerifyStateAccountAction: () => void
}

export default function useVerifyStateAccount({
	onVerifyStateAccountAction,
}: Props) {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const verifyStateAccount = useCallback(
		async (credentials: Credentials) => {
			setLoading(true)
			setError(null)
			const res = await verifyStateAccountService({
				username: credentials.firstCredential,
				password: credentials.password,
			})
			if (!res.response || res.error) {
				const error = res.error as Error

				if (error.code === "403") {
					const userId = error.metadata.userId as string
					// save the credentials in temporal token
					const temporalTokenWithCredentials = await generateToken<{
						username: string
						password: string
					}>({
						username: credentials.firstCredential,
						password: credentials.password,
					})
					localStorage.setItem(
						"temporalToken",
						JSON.stringify({
							data: temporalTokenWithCredentials,
							expiry: new Date().getTime() + 10 * 60 * 1000, // 10 min
						}),
					)
					router.push(
						paths.verificationCode({
							userId,
							objective: "activate",
						}).root,
					)
				} else setError(error.reason)
			} else {
				onVerifyStateAccountAction()
			}
		},
		[onVerifyStateAccountAction],
	)
	return {
		loading,
		error,
		verifyStateAccount,
	}
}
