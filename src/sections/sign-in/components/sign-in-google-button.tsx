"use client"
import { Button } from "@/src/components/ui/button"
import useGoogleSignIn from "@/src/sections/sign-in/form/hooks/use-google-sign-in"
import { FcGoogle } from "react-icons/fc"

export default function SignInGoogleButton() {
	const { signInWithGoogle, loading: loadingGoogle } = useGoogleSignIn({
		onSignInAction: () => {},
	})
	return (
		<Button
			variant="outline"
			className="w-full bg-primary flex items-center gap-2"
			disabled={loadingGoogle}
			onClick={() => {
				signInWithGoogle()
			}}
		>
			<FcGoogle size={20} />
			Continuar con Google
		</Button>
	)
}
