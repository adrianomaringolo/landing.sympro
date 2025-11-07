'use client'

import { motion } from 'framer-motion'
import { CTALaunching } from './cta-launching'

export const FinalCTASection = () => {
	return (
		<section className="py-20 relative overflow-hidden">
			{/* Background decorativo */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-4xl mx-auto text-center"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
						Vamos começar a{' '}
						<span className="text-primary">transformar o seu negócio</span> hoje?
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-10 max-w-3xl mx-auto leading-relaxed">
						Junte-se a essa comunidade de profissionais que buscam eficiência e
						crescimento. Seja um dos primeiros a experimentar!
					</p>
					<CTALaunching />

					{/* Elementos de confiança */}
					<div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<span className="text-primary text-xl">🎯</span>
							<span>Fácil de usar</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-primary text-xl">🚀</span>
							<span>Resultados rápidos</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-primary text-xl">💪</span>
							<span>Suporte dedicado</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
