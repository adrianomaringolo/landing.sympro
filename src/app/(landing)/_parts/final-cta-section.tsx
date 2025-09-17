'use client'

import { CTALaunching } from './cta-launching'

export const FinalCTASection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
						Vamos começar a{' '}
						<span className="text-primary"> transformar o seu negócio </span>hoje?
					</h2>
					<p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
						Junte-se a essa comunidade de profissionais que buscam eficiência e
						crescimento.
					</p>
					{/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-3">
							Start Your Free Trial
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="text-lg px-8 py-3 bg-transparent"
						>
							Schedule a Demo
						</Button>
					</div>
					<p className="text-sm text-muted-foreground mt-4">
						14-day free trial • No setup fees • Cancel anytime
					</p> */}
					<CTALaunching />
				</div>
			</div>
		</section>
	)
}
