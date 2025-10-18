import { Star, Droplets, Palette, Users, Info } from "lucide-react"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardContent } from "@/src/components/ui/card"
import { Separator } from "@/src/components/ui/separator"
import { genderMap, type PerfumeDetails } from "@/src/lib/types/perfumes"
import PerfumeInfoCard from "@/src/sections/perfumes/details/components/perfume-info-card/perfume-info-card"
import { fCurrency } from "@/src/lib/utils/format-number"
import AddShopCartPerfumeButton from "@/src/sections/perfumes/components/perfume-card/components/add-shop-cart-perfume-button"
import BackButton from "@/src/components/back-button/back-button"
import ThumbnailsImage from "@/src/components/thumbnails-image/thumbnails-image"

interface Props {
	perfume: PerfumeDetails
}

export default function PerfumeDetailsContent({ perfume }: Props) {
	const genderInfo = genderMap.get(perfume.gender)

	return (
		<div className="min-h-screen bg-background">
			<div className="px-4 md:px-8 pt-6 pb-4">
				<BackButton />
			</div>

			<div className="px-4 md:px-8 pb-12">
				<div className="flex flex-col lg:flex-row p-4 w-full gap-8">
					<div className="lg:sticky lg:top-8">
						<ThumbnailsImage
							altName={perfume.name}
							images={[perfume.image, ...perfume.images]}
						/>
					</div>

					<div className="space-y-6">
						<div className="flex flex-wrap items-center gap-2">
							<Badge
								variant="secondary"
								className="text-sm text-primary font-medium"
							>
								{perfume.brand.name}
							</Badge>
							{perfume.offer && (
								<Badge
									variant="destructive"
									className="text-sm font-semibold"
								>
									-{perfume.offer.discount * 100}% OFF
								</Badge>
							)}
							{perfume.available ? (
								<div className="flex gap-2 items-center">
									<div
										className={`w-2.5 h-2.5 rounded-full ${perfume.cant > 0 ? "bg-green-500" : "bg-red-500"}`}
									/>
									<span
										className={`text-sm font-medium ${perfume.cant > 0 ? "text-green-700" : "text-red-700"}`}
									>
										{perfume.cant > 0
											? "En stock"
											: "Agotado"}
									</span>
								</div>
							) : (
								<div className="flex gap-2 items-center">
									<div
										className={`w-2.5 h-2.5 rounded-full ${perfume.available ? "bg-green-500" : "bg-red-500"}`}
									/>
									<span
										className={`text-sm font-medium ${perfume.available ? "text-green-700" : "text-red-700"}`}
									>
										{perfume.available
											? "En stock"
											: "No disponible"}
									</span>
								</div>
							)}
						</div>

						<div className="grid md:grid-cols-2 items-center justify-center lg:grid-cols-1 xl:grid-cols-[40%_60%] gap-4">
							<div className="flex flex-col gap-4">
								<h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
									{perfume.name}
								</h1>

								<div className="space-y-3">
									<h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
										<Palette className="w-4 h-4" />
										Notas aromáticas
									</h3>
									<div className="flex flex-wrap gap-2">
										{perfume.scents.map(scent => (
											<Badge
												key={scent.id}
												variant="secondary"
												className="text-primary text-sm"
											>
												{scent.name}
											</Badge>
										))}
									</div>
								</div>
								<div className="space-y-3">
									<h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
										<Info className="w-4 h-4" />
										Información general
									</h3>
									<div className="flex flex-wrap gap-8">
										<PerfumeInfoCard
											title="Género"
											info={genderInfo?.name as string}
											icon={
												<Users className="w-5 h-5 mx-auto mb-1.5 text-primary" />
											}
										/>

										<PerfumeInfoCard
											title="Volumen"
											info={perfume.milliliters + " ml"}
											icon={
												<Droplets className="w-5 h-5 mx-auto mb-1.5 text-primary" />
											}
										/>
										<PerfumeInfoCard
											title="Tipo"
											info={perfume.perfumeType.name}
											icon={
												<Palette className="w-5 h-5 mx-auto mb-1.5 text-primary" />
											}
										/>
									</div>
								</div>
							</div>
							<div className="space-y-3">
								<h3 className="text-lg font-semibold text-foreground">
									Descripción
								</h3>
								<p className="text-foreground xl:text-lg leading-relaxed text-pretty">
									{perfume.description}
								</p>
							</div>
						</div>

						{perfume.offer && (
							<Card className="border-destructive/20 bg-destructive/5">
								<CardContent className="p-4">
									<h4 className="font-semibold text-destructive mb-1">
										{perfume.offer.name}
									</h4>
									<p className="text-sm text-destructive/80">
										{perfume.offer.description}
									</p>
								</CardContent>
							</Card>
						)}

						<Separator className="bg-secondary" />

						<div className="space-y-4">
							<div className="flex items-baseline gap-3">
								<span className="text-4xl font-bold text-foreground">
									{fCurrency(perfume.totalPrice)}
								</span>
								{perfume.offer && (
									<span className="text-xl text-muted-foreground line-through">
										{fCurrency(perfume.price)}
									</span>
								)}
							</div>
							{perfume.offer && (
								<p className="text-sm text-green-600 font-medium">
									¡Ahorras{" "}
									{fCurrency(
										perfume.price - perfume.totalPrice,
									)}
									!
								</p>
							)}

							<AddShopCartPerfumeButton
								variant="large"
								perfume={perfume}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
