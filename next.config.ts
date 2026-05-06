import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "standalone",

	experimental: {
		serverActions: {
			bodySizeLimit: "2mb",
		},
	},

	images: {
		// Evita timeouts de imágenes grandes desde MinIO
		// Si quieres optimización, ponlo en false
		unoptimized: true,

		// Permitir calidad 100 (Next.js 16 exige declararlo)
		qualities: [75, 100],

		remotePatterns: [
			// 🟦 MinIO (dominio fijo, sin variables)
			{
				protocol: "https",
				hostname: "minio.perfumesdelpuro.com",
				port: "443",
				pathname: "/perfumery-prod/**",
			},

			// 🟦 Google OAuth images
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lh4.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lh5.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lh6.googleusercontent.com",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
