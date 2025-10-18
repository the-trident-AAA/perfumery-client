import NavigationComponent from "@/src/components/navigation-component/navigation-component"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import React from "react"

export default function ContactInformation() {
	return (
		<div className="space-y-4">
			<h4 className="font-medium text-secondary text-sm uppercase tracking-wider">
				Contact
			</h4>
			<ul className="space-y-3 text-sm">
				<li>
					<NavigationComponent
						className="cursor-pointer"
						href="https://www.instagram.com/perfumes_del_puro/"
					>
						<div className="flex items-center">
							<Instagram
								size={18}
								className="mr-2 text-secondary"
							/>
							<span className="text-secondary">
								perfumes_del_puro
							</span>
						</div>
					</NavigationComponent>
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
