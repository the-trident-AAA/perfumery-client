import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import React from "react"

export default function ContactInformation() {
	return (
		<div className="space-y-4">
			<h4 className="font-medium text-secondary text-sm uppercase tracking-wider">
				Contact
			</h4>
			<ul className="space-y-3 text-sm">
				<li className="flex items-center">
					<Instagram size={18} className="mr-2 text-secondary" />
					<span className="text-secondary">perfumes_del_puro</span>
				</li>
				<li className="flex items-center">
					<Phone size={18} className="mr-2 text-secondary" />
					<span className="text-secondary">+53 63229014</span>
				</li>
				<li className="flex items-center">
					<Mail size={18} className="mr-2 text-secondary" />
					<span className="text-secondary">
						perfumesdelpuro@gmail.com
					</span>
				</li>
			</ul>
		</div>
	)
}
