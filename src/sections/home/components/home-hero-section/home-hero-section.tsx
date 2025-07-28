import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Button } from "@/src/components/ui/button"
import { paths } from "@/src/lib/routes/paths"
import { Check } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function HomeHeroSection() {
	return (
		<section className="p-6 bg-muted">
			<div className="container mx-auto px-4">
				<div className="flex flex-col-reverse md:flex-row justify-between gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
								Crea tu portafolio profesional en minutos
							</h1>
							<p className="text-xl text-black font-semibold leading-relaxed">
								PortfolioMaker te ayuda a mostrar tus proyectos,
								experiencia, certificaciones y más de forma
								intuitiva. Sin código, sin complicaciones.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<NavigationComponent href={paths.perfumes().root}>
								<Button
									size="lg"
									variant={"default"}
									className="text-lg px-8 py-6"
								>
									Ver Perfumes
								</Button>
							</NavigationComponent>
						</div>
						<div className="flex items-center space-x-6 text-sm text-slate-500">
							<div className="flex items-center space-x-1">
								<Check className="w-4 h-4 text-green-500" />
								<span>Envios Gratis para toda la Habana</span>
							</div>
							<div className="flex items-center space-x-1">
								<Check className="w-4 h-4 text-green-500" />
								<span>Perfumes de marcas registradas</span>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="relative z-10">
							<Image
								src="/images/place-holder.jpg"
								alt="Portfolio example on laptop"
								width={600}
								height={450}
								className="rounded-2xl shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
