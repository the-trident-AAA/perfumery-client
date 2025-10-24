import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	experimental: {
		serverActions: {
			bodySizeLimit: "2mb",
		},
	},
	images: {
		remotePatterns: [
			{
				protocol:
					(process.env.NEXT_PUBLIC_IMAGE_PROTOCOL as
						| "http"
						| "https") || "http",
				hostname: process.env.NEXT_PUBLIC_IMAGE_HOST || "localhost",
				pathname: process.env.NEXT_PUBLIC_IMAGE_PATH || "/perfumery/**",
			},
		],
	},
}

export default nextConfig
