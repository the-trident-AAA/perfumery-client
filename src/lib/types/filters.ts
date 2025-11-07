export interface OptionData<T, K> {
	data: T[]
	loading: boolean
	filters: K
	handleChangeFilters: (updatedFilters: K) => Promise<void>
}
