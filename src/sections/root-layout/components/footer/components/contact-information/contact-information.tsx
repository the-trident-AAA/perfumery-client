import { Mail, MapPin, Phone } from "lucide-react"
import React from "react"

export default function ContactInformation() {
	return (
		<div className="space-y-4">
			<h4 className="font-medium text-secondary text-sm uppercase tracking-wider">
				Contact
			</h4>
			<ul className="space-y-3 text-sm">
				<li className="flex items-start">
					<MapPin
						size={18}
						className="mr-2 text-secondary flex-shrink-0 mt-0.5"
					/>
					<span className="text-secondary">
						123 Fragrance Avenue, Perfume City, 10001
					</span>
				</li>
				<li className="flex items-center">
					<Phone size={18} className="mr-2 text-secondary" />
					<span className="text-secondary">+1 (555) 123-4567</span>
				</li>
				<li className="flex items-center">
					<Mail size={18} className="mr-2 text-secondary" />
					<span className="text-secondary">
						contact@essenceperfumes.com
					</span>
				</li>
			</ul>
		</div>
	)
}
