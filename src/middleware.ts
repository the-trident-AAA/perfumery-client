import { auth } from "@/src/auth"
import { paths } from "@/src/lib/routes/paths"

export default auth(req => {
	if (!req.auth && req.nextUrl.pathname !== paths.sign_in.root) {
		const newUrl = new URL(paths.sign_in.root, req.nextUrl.origin)
		return Response.redirect(newUrl)
	}
})

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
