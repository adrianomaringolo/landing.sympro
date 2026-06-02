'use client'

import { motion, type Variants } from 'framer-motion'
import { Quote } from 'lucide-react'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const testimonials = [
	{
		quote:
			'Antes eu esquecia de cobrar às vezes, ou ficava sem saber se o mês tinha fechado bem. Hoje abro o SymPro e vejo tudo num segundo.',
		name: 'Fernanda Costa',
		role: 'Cabeleireira, São Paulo',
		initial: 'F',
		color: 'bg-pink-500',
	},
	{
		quote:
			'O sistema de metas mudou meu jeito de trabalhar. Agora sei todo dia se estou no caminho certo — antes esperava o fim do mês pra descobrir.',
		name: 'Rafael Borges',
		role: 'Personal Trainer, Curitiba',
		initial: 'R',
		color: 'bg-orange-500',
	},
	{
		quote:
			'Minha cliente mais fiel ia fazer aniversário e o SymPro me avisou. Mandei uma mensagem, ela ficou emocionada. Esse tipo de detalhe fideliza.',
		name: 'Luciana Matos',
		role: 'Manicure, Belo Horizonte',
		initial: 'L',
		color: 'bg-teal-600',
	},
]

export const TestimonialsSection = () => {
	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-2xl mx-auto mb-14"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Quem já usa{' '}
						<span className="text-primary">conta a diferença</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Profissionais que testaram o SymPro antes do lançamento.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-60px' }}
					className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
				>
					{testimonials.map((t, i) => (
						<motion.div key={i} variants={itemVariants}>
							<div className="h-full rounded-2xl border border-border/50 bg-card/80 p-6 flex flex-col hover:border-primary/30 hover:shadow-[0_0_24px_oklch(0.52_0.117_195_/_0.07)] transition-all duration-300">
								<Quote className="w-8 h-8 text-primary/30 mb-4 shrink-0" />
								<p className="text-sm leading-relaxed text-foreground flex-1 mb-6">
									&ldquo;{t.quote}&rdquo;
								</p>
								<div className="flex items-center gap-3">
									<div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
										<span className="text-white font-bold text-sm">{t.initial}</span>
									</div>
									<div>
										<p className="text-sm font-semibold text-foreground">{t.name}</p>
										<p className="text-xs text-muted-foreground">{t.role}</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
