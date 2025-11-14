"use client"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import useGoogleSignIn from "@/src/sections/sign-in/form/hooks/use-google-sign-in"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-toastify"

export default function SignInGoogleButton() {
	const { signInWithGoogle, loading: loadingGoogle } = useGoogleSignIn({
		onSignInAction: () => {
			toast.success("Inicio de sesión con Google exitoso")
			window.location.href = paths.home.root
		},
	})
	return (
		<Button
			variant="outline"
			className="w-full flex items-center gap-2"
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
