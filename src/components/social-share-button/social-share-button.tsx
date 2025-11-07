"use client"

import {
	Share2,
	Facebook,
	MessageCircle,
	Copy,
	Check,
	Share,
} from "lucide-react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/button"

interface SocialShareButtonProps {
	url: string
	title: string
	description?: string
}

export default function SocialShareButton({
	url,
	title,
	description = "",
}: SocialShareButtonProps) {
	const [copied, setCopied] = useState(false)
	const [shareUrl, setShareUrl] = useState(url)
	const [canUseNativeShare, setCanUseNativeShare] = useState(false)

	const shareText = `${title}${description ? ` - ${description}` : ""}`

	useEffect(() => {
		setShareUrl(window.location.origin + url)
		// Verificar si el navegador soporta la Web Share API
		setCanUseNativeShare(!!navigator.share)
	}, [url])

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error("Failed to copy:", err)
		}
	}

	const handleNativeShare = async () => {
		try {
			await navigator.share({
				title: title,
				text: shareText,
				url: shareUrl,
			})
		} catch (err) {
			// El usuario canceló el share o ocurrió un error
			console.log("Share cancelled or failed:", err)
		}
	}

	const shareLinks = {
		whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
		twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
	}

	// Si el dispositivo soporta native share, mostramos SOLO el botón nativo
	if (canUseNativeShare) {
		return (
			<Button
				variant={"secondary"}
				className={"text-primary"}
				onClick={handleNativeShare}
			>
				<Share className="w-4 h-4 mr-2" />
				Compartir
			</Button>
		)
	}

	// Fallback para dispositivos que no soportan native share
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"secondary"} className={"text-primary"}>
					<Share2 className="w-4 h-4 mr-2" />
					Compartir
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-48 bg-muted">
				<DropdownMenuItem asChild>
					<a
						href={shareLinks.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center cursor-pointer"
					>
						<MessageCircle className="w-4 h-4 mr-2 text-green-600" />
						WhatsApp
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<a
						href={shareLinks.facebook}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center cursor-pointer"
					>
						<Facebook className="w-4 h-4 mr-2 text-blue-600" />
						Facebook
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<a
						href={shareLinks.twitter}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center cursor-pointer"
					>
						<svg
							className="w-4 h-4 mr-2"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
						Twitter / X
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={handleCopyLink}
					className="cursor-pointer"
				>
					{copied ? (
						<>
							<Check className="w-4 h-4 mr-2 text-green-600" />
							¡Copiado!
						</>
					) : (
						<>
							<Copy className="w-4 h-4 mr-2" />
							Copiar enlace
						</>
					)}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
