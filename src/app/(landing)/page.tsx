'use client'

import { DeviceSection } from './_parts/devices-section'
import { FAQSection } from './_parts/faq-section'
import { FeaturesSection } from './_parts/features-section'
import { FinalCTASection } from './_parts/final-cta-section'
import { Footer } from './_parts/footer'
import { Header } from './_parts/header'
import { HeroSection } from './_parts/hero-section'
import { HowItWorksSection } from './_parts/how-it-works-section'
import { PillarsSection } from './_parts/pillars-section'
import { PricingSection } from './_parts/pricing-section'
import { ProductShowcaseSection } from './_parts/product-showcase-section'
import { TeamSection } from './_parts/team-section'

export default function SymProLanding() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<HeroSection />
			<PillarsSection />
			<HowItWorksSection />
			<DeviceSection />
			<FeaturesSection />
			<ProductShowcaseSection />
			<PricingSection />
			<TeamSection />
			<FAQSection />
			<FinalCTASection />
			<Footer />
		</div>
	)
}
