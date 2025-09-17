'use client'

import { Badge, Card, CardContent } from 'buildgrid-ui'
import { Star } from 'lucide-react'
import { DeviceSection } from './_parts/devices-section'
import { FeaturesSection } from './_parts/features-section'
import { FinalCTASection } from './_parts/final-cta-section'
import { Footer } from './_parts/footer'
import { Header } from './_parts/header'
import { HeroSection } from './_parts/hero-section'
import { PricingSection } from './_parts/pricing-section'
import { ProductShowcaseSection } from './_parts/product-showcase-section'
import { TeamSection } from './_parts/team-section'

export default function StreamLineLanding() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<HeroSection />
			<DeviceSection />
			<FeaturesSection />
			<ProductShowcaseSection />

			{/* <TestimonialsSection />*/}
			<PricingSection />

			<TeamSection />

			{/* Final CTA Section */}
			<FinalCTASection />

			<Footer />
		</div>
	)
}

function TestimonialsSection() {
	const testimonials = [
		{
			quote:
				"StreamLine transformed our operations completely. We've reduced manual work by 80% and our team can focus on strategic initiatives.",
			author: 'Sarah Chen',
			role: 'Operations Director',
			company: 'TechFlow Inc.',
		},
		{
			quote:
				"The ROI was immediate. Within the first month, we saved over 200 hours of manual work. It's like having an extra team member.",
			author: 'Marcus Rodriguez',
			role: 'CEO',
			company: 'GrowthLabs',
		},
		{
			quote:
				'Implementation was seamless and the support team is incredible. StreamLine has become essential to our daily operations.',
			author: 'Emily Watson',
			role: 'Product Manager',
			company: 'InnovateCorp',
		},
	]

	return (
		<section id="testimonials" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
						Testimonials
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
						Trusted by <span className="text-primary">industry leaders</span>
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
						See how companies like yours are transforming their workflows with StreamLine.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card key={index} className="border-border/50">
							<CardContent className="pt-6">
								<div className="flex mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-accent text-accent" />
									))}
								</div>
								<blockquote className="text-lg mb-6 leading-relaxed">
									&quot;{testimonial.quote}&quot;
								</blockquote>
								<div>
									<div className="font-semibold">{testimonial.author}</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role} at {testimonial.company}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
