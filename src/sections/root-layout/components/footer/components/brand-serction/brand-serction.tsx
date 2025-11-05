import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function BrandSection() {
	return (
		<div className="space-y-4">
			<h3 className="text-xl text-secondary font-medium">
				Perfumes del Puro
			</h3>
			<p className="text-secondary text-sm">
				Descubre nuestra colección de perfumes de lujo elaborados con
				los mejores ingredientes de todo el mundo.
			</p>
			<div className="flex space-x-4">
				<Link href="#" className="text-secondary hover:text-white">
					<Facebook size={20} />
					<span className="sr-only">Facebook</span>
				</Link>
				<Link
					href="https://www.instagram.com/perfumes_del_puro/"
					className="text-secondary hover:text-white"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Instagram size={20} />
					<span className="sr-only">Instagram</span>
				</Link>
				<Link href="#" className="text-secondary hover:text-white">
					<Twitter size={20} />
					<span className="sr-only">Twitter</span>
				</Link>
			</div>
		</div>
	)
}
