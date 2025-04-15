"use client"

import { Input } from "@/src/components/ui/input"

export default function PerfumesFilters() {
	return (
		<aside className="w-full p-6 border-r min-h-screen">
			<h2 className="text-xl font-semibold mb-6">Filters</h2>

			{/* Perfumes Section */}
			<div className="mb-8">
				<h3 className="text-sm text-muted-foreground mb-3">Products</h3>
				<div className="space-y-3">
					<label className="flex items-center space-x-2">
						<span className="text-sm">Autor</span>
						<Input placeholder="introduzca autor" />
					</label>
				</div>
			</div>

			{/* Categories Section */}
			<div>
				<h3 className="text-sm text-muted-foreground mb-3">
					Categories
				</h3>
				<div className="space-y-3">
					<label className="flex items-center space-x-2">
						X<span className="text-sm">API Management</span>
					</label>
					<label className="flex items-center space-x-2">
						X
						<span className="text-sm">
							Content Management System
						</span>
					</label>
					<label className="flex items-center space-x-2">
						X<span className="text-sm">Data Science</span>
					</label>
					<label className="flex items-center space-x-2">
						X<span className="text-sm">Databases & Storage</span>
					</label>
					<label className="flex items-center space-x-2">
						X<span className="text-sm">Languages & Frameworks</span>
					</label>
					<label className="flex items-center space-x-2">
						X<span className="text-sm">Integration & Delivery</span>
					</label>
					<label className="flex items-center space-x-2">
						X<span className="text-sm">Internet of Things</span>
					</label>
				</div>
			</div>
		</aside>
	)
}
