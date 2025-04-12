import type React from "react"
import BrandSection from "@/src/sections/root-layout/components/footer/components/brand-serction/brand-serction"
import QuickLinks from "@/src/sections/root-layout/components/footer/components/quick-links/quick-links"
import ContactInformation from "@/src/sections/root-layout/components/footer/components/contact-information/contact-information"
import BottomSection from "@/src/sections/root-layout/components/footer/components/bottom-section/bottom-section"
import Promotion from "@/src/sections/root-layout/components/footer/components/promotion/promotion"

export default function Footer() {
	return (
		<footer className="bg-neutral-50 border-t">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
					{/* Brand Section */}
					<BrandSection />

					{/* Quick Links */}
					<QuickLinks />

					{/* Contact Information */}
					<ContactInformation />

					{/* Youtube Promotion */}
					<Promotion />
				</div>
				{/* Bottom Section */}
				<BottomSection />
			</div>
		</footer>
	)
}
