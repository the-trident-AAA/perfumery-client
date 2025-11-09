import { ArrowRight, ShoppingBag } from "lucide-react"
import { HomeBanner } from "@/src/lib/types/home-banners"
import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Skeleton } from "@/src/components/ui/skeleton"
import HomeBannerImagesCarousel from "@/src/sections/home/components/home-banner-section/components/home-banner-images-carousel/home-banner-images-carousel"

interface Props {
	homeBanner: HomeBanner
}

export default function HomeBannerSectionMobile({
	homeBanner: { title, description, images, infoTips, statisticalTips },
}: Props) {
	return (
		<div className="relative w-full h-full overflow-hidden bg-primary">
			{/* Fondo decorativo */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Círculos decorativos estáticos */}
				<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-3xl animate-pulse" />
				<div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-white/10 to-white/5 blur-3xl animate-pulse delay-1000" />

				{/* Elementos geométricos flotantes */}
				<div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce" />
				<div className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300" />
				<div className="absolute bottom-32 left-1/4 w-5 h-5 bg-white/15 rounded-full animate-bounce delay-700" />

				{/* Líneas decorativas */}
				<div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
				<div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />

				{/* Patrón de cuadrícula */}
				<div className="absolute inset-0 opacity-5">
					<div className="grid grid-cols-12 h-full">
						{Array.from({ length: 12 }).map((_, i) => (
							<div key={i} className="border-r border-white/10" />
						))}
					</div>
				</div>
			</div>

			{/* Contenido principal */}
			<div className="relative z-10 2xs:py-8 2xs:container 2xs:mx-auto 2xs:px-6 h-full flex items-center">
				<div className="flex lg:flex-row flex-col-reverse w-full items-center lg:gap-12">
					{/* Texto principal */}
					<div className="space-y-4 px-6 2xs:px-0 pb-4 sm:space-y-8 animate-fade-in-left">
						<div className="flex flex-col 2xs:gap-4 sm:flex-row gap-4 sm:items-center">
							<Avatar className="hidden lg:flex xl:h-40 h-20 w-20 xl:w-40">
								<AvatarImage src="/icons/logo-icon.png" />
								<AvatarFallback>
									<Skeleton className="h-40 w-40 rounded-full" />
								</AvatarFallback>
							</Avatar>

							{/* Título */}
							<div className="space-y-2 lg:space-y-4">
								<h1 className="text-lg md:text-6xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-black leading-tight text-secondary animate-slide-up">
									<span className="block">
										{title.split(" ").slice(0, 2).join(" ")}
									</span>
									<span className="block">
										{title.split(" ").slice(2).join(" ")}
									</span>
								</h1>
								<div className="w-24 h-[2px] lg:h-1 bg-secondary animate-expand-width" />
							</div>
						</div>

						{/* Descripción */}
						<h2 className="text-base sm:text-xl lg:text-xl xl:text-2xl text-secondary leading-relaxed max-w-2xl animate-fade-in delay-300">
							{description}
						</h2>

						{/* Estadísticas */}
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-8 animate-fade-in delay-500">
							{statisticalTips.map((stat, i) => (
								<div key={i} className="text-center">
									<div className="text-secondary/70 text-sm">
										{stat.statistics}
									</div>
									<div className="text-base sm:text-3xl lg:text-xl 2xl:text-3xl font-bold text-secondary">
										{stat.info}
									</div>
								</div>
							))}
						</div>

						{/* Botón principal */}
						<div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
							<NavigationComponent href={paths.perfumes().root}>
								<Button
									variant="secondary"
									className="group bg-secondary text-primary text-sm 2xs:text-base sm:text-lg font-bold px-4 sm:px-8 py-2.5 sm:py-4 h-auto rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
								>
									<ShoppingBag className="w-5 h-5 mr-3" />
									Explorar Colección
									<ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
								</Button>
							</NavigationComponent>
						</div>

						{/* Info tips */}
						<div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-6 pt-4 animate-fade-in delay-1000">
							{infoTips.map((info, i) => (
								<div
									key={i}
									className="flex items-center gap-2 text-secondary"
								>
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<span className="text-xs 2xs:text-sm">
										{info}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Imagen o carrusel */}
					<div className="relative animate-fade-in-right">
						<HomeBannerImagesCarousel images={images} />
					</div>
				</div>
			</div>

			{/* Indicador de scroll */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
				</div>
			</div>
		</div>
	)
}
