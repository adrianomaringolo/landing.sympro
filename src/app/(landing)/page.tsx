import { DeviceSection } from './_parts/devices-section'
import { DiferenciaisSection } from './_parts/diferenciais-section'
import { FAQSection } from './_parts/faq-section'
import { FeaturesSection } from './_parts/features-section'
import { FinalCTASection } from './_parts/final-cta-section'
import { Footer } from './_parts/footer'
import { ForWhoSection } from './_parts/for-who-section'
import { Header } from './_parts/header'
import { HeroSection } from './_parts/hero-section'
import { HowItWorksSection } from './_parts/how-it-works-section'
import { PillarsSection } from './_parts/pillars-section'
import { PricingSection } from './_parts/pricing-section'
import { ProductShowcaseSection } from './_parts/product-showcase-section'
import { StructuredData } from './_parts/structured-data'
import { TeamSection } from './_parts/team-section'
import { TestimonialsSection } from './_parts/testimonials-section'
import { VideoSection } from './_parts/video-section'

export default function SymProLanding() {
	return (
		<div className="min-h-screen bg-background">
			<StructuredData />
			<Header />
			<main>
				<HeroSection />
				<ForWhoSection />
				<PillarsSection />
				<HowItWorksSection />
				<VideoSection />
				<DeviceSection />
				<FeaturesSection />
				<DiferenciaisSection />
				<ProductShowcaseSection />
				<TestimonialsSection />
				<PricingSection />
				<TeamSection />
				<FAQSection />
				<FinalCTASection />
			</main>
			<Footer />
		</div>
	)
}
