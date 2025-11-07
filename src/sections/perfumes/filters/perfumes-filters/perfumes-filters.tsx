import CheckboxInput from "@/src/components/inputs/checkbox-input/checkbox-input"
import ListInput from "@/src/components/inputs/list-input/list-input"
import SearchInput from "@/src/components/inputs/search-input/search-input"
import SelectInput from "@/src/components/inputs/select-input/select-input"
import SliderInput from "@/src/components/inputs/slider-input/slider-input"
import { Separator } from "@/src/components/ui/separator"
import { Brand } from "@/src/lib/types/brands"
import { OptionData } from "@/src/lib/types/filters"
import { Offer } from "@/src/lib/types/offers"
import { PerfumeType } from "@/src/lib/types/perfume-types"
import { Gender, genderMap } from "@/src/lib/types/perfumes"
import { Scent } from "@/src/lib/types/scents"
import { BrandsFilters } from "@/src/sections/brands/filters/hooks/use-brands-filters"
import { OffersFilters } from "@/src/sections/offers/filters/hooks/use-offers-filters"
import { PerfumeTypesFilters } from "@/src/sections/perfume-types/filters/hooks/use-perfume-types-filters"
import { PerfumesFilters as PerfumesFiltersType } from "@/src/sections/perfumes/filters/hooks/use-perfumes-filters"
import { ScentsFilters } from "@/src/sections/scents/filters/hooks/use-scents-filters"
import { useCallback } from "react"

interface Props {
	filters: PerfumesFiltersType
	handleChangeFilters: (filters: Partial<PerfumesFiltersType>) => void
	brands: OptionData<Brand, BrandsFilters>
	perfumeTypes: OptionData<PerfumeType, PerfumeTypesFilters>
	scents: OptionData<Scent, ScentsFilters>
	offers: OptionData<Offer, OffersFilters>
}

export default function PerfumesFilterss({
	filters,
	brands,
	perfumeTypes,
	scents,
	offers,
	handleChangeFilters,
}: Props) {
	const handleScentChange = useCallback(
		(scentId: string, checked: boolean) => {
			const currentScents = filters.scentsIds || []
			const newScents = checked
				? [...currentScents, scentId]
				: currentScents.filter(id => id !== scentId)

			handleChangeFilters({
				scentsIds: newScents.length > 0 ? newScents : [],
			})
		},
		[filters, handleChangeFilters],
	)

	return (
		<div className="flex flex-col gap-4 p-4 overflow-auto">
			{/* Search for name */}
			<SearchInput
				id="name"
				label="Buscar por nombre"
				value={filters.name}
				placeHolder="Introduzca el nombre del perfume..."
				onChange={e => {
					handleChangeFilters({ name: e.target.value || undefined })
				}}
			/>
			<Separator className="bg-secondary" />
			<div className="flex flex-col gap-4">
				{/* Brand */}
				<SelectInput
					label="Marca"
					placeHolder="Seleccione una marca..."
					value={filters.brandId}
					onValueChange={value => {
						handleChangeFilters({ brandId: value || undefined })
					}}
					options={brands.data.map(brand => ({
						value: brand.id,
						label: brand.name,
					}))}
					loading={brands.loading}
					clearable={{
						handleClear: () => {
							handleChangeFilters({ brandId: undefined })
						},
					}}
					filterValue={brands.filters.name}
					onFilterChange={value => {
						brands.handleChangeFilters({ name: value || undefined })
					}}
					filterPlaceholder="Busque alguna marca..."
					emptyText="No se encontraron marcas"
				/>

				{/* Gender */}
				<SelectInput
					label="Género"
					placeHolder="Seleccione un género..."
					value={filters.gender}
					onValueChange={value => {
						handleChangeFilters({
							gender: (value as Gender) || undefined,
						})
					}}
					options={[
						{
							value: Gender.MALE,
							label: genderMap.get(Gender.MALE)?.name as string,
						},
						{
							value: Gender.FEMALE,
							label: genderMap.get(Gender.FEMALE)?.name as string,
						},
						{
							value: Gender.UNISEX,
							label: genderMap.get(Gender.UNISEX)?.name as string,
						},
					]}
					clearable={{
						handleClear: () => {
							handleChangeFilters({ gender: undefined })
						},
					}}
				/>

				{/* PerfumeType */}
				<SelectInput
					label="Perfumes"
					placeHolder="Seleccione un perfume..."
					value={filters.perfumeTypeId}
					onValueChange={value => {
						handleChangeFilters({
							perfumeTypeId: value || undefined,
						})
					}}
					options={perfumeTypes.data.map(perfumeType => ({
						value: perfumeType.id,
						label: perfumeType.name,
					}))}
					loading={perfumeTypes.loading}
					clearable={{
						handleClear: () => {
							handleChangeFilters({ perfumeTypeId: undefined })
						},
					}}
					filterValue={perfumeTypes.filters.name}
					onFilterChange={value => {
						perfumeTypes.handleChangeFilters({
							name: value || undefined,
						})
					}}
					filterPlaceholder="Busque algún perfume..."
					emptyText="No se encontraron perfumes"
				/>
			</div>
			<Separator className="bg-secondary" />
			{/* Available y Offers */}
			<div className="flex flex-col gap-4">
				{/* Disponibilidad */}
				<CheckboxInput
					id="available"
					label="Disponibilidad"
					description="Solo productos disponibles"
					value={filters.available}
					onCheckedChange={checked => {
						handleChangeFilters({
							available: checked ? true : undefined,
						})
					}}
				/>

				{/* Offers */}
				<SelectInput
					label="Oferta"
					placeHolder="Seleccione una oferta..."
					value={filters.offerId}
					onValueChange={value => {
						handleChangeFilters({ offerId: value || undefined })
					}}
					options={offers.data.map(offer => ({
						value: offer.id,
						label: offer.name,
					}))}
					loading={offers.loading}
					clearable={{
						handleClear: () => {
							handleChangeFilters({ offerId: undefined })
						},
					}}
					filterValue={offers.filters.name}
					onFilterChange={value => {
						offers.handleChangeFilters({
							name: value || undefined,
						})
					}}
					filterPlaceholder="Busque alguna oferta..."
					emptyText="No se encontraron ofertas"
				/>
			</div>
			<Separator className="bg-secondary" />
			{/* Price and Mililiters */}
			<div className="flex flex-col gap-4">
				{/* Price */}
				<SliderInput
					label="Precio"
					meansure="$"
					value={filters.priceRange}
					step={5}
					max={300}
					handleChangeFilters={value => {
						handleChangeFilters({
							priceRange: value as [number, number],
						})
					}}
				/>
			</div>
			<Separator className="bg-secondary" />
			{/* Scents */}
			<ListInput
				id="scents"
				label="Aromas"
				values={filters.scentsIds}
				options={scents.data.map(scent => ({
					value: scent.id,
					label: scent.name,
				}))}
				loading={scents.loading}
				handleValuesChange={handleScentChange}
				handleDeselectAll={() => {
					handleChangeFilters({ scentsIds: [] })
				}}
				filterValue={scents.filters.name}
				onFilterChange={value => {
					scents.handleChangeFilters({
						name: value || undefined,
					})
				}}
				filterPlaceholder="Busque algún aroma..."
				emptyText="No se encontraron aromas"
				deselectAllText="Deseleccionar todas"
			/>
		</div>
	)
}
