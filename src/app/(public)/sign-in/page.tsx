import SignInContainer from "@/src/sections/sign-in/sign-in-container"
import React from "react"

type Props = {
	searchParams: Promise<{ objective?: "createOrder" }>
}

export default async function SignInPage({ searchParams }: Props) {
	const { objective } = await searchParams
	return <SignInContainer objective={objective} />
}
