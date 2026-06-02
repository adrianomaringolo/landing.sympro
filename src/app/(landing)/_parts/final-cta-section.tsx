'use client'

import { motion } from 'framer-motion'
import { CTALaunching } from './cta-launching'

export const FinalCTASection = () => {
	return (
		<section className="py-32 relative overflow-hidden">
			{/* Light teal gradient bg */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `
						radial-gradient(ellipse at 50% 50%, oklch(0.52 0.117 195 / 0.07) 0%, transparent 70%),
						oklch(0.97 0.005 197)
					`,
				}}
			/>
			{/* Subtle grid texture */}
			<div
				className="absolute inset-0 pointer-events-none opacity-60"
				style={{
					backgroundImage: `
						linear-gradient(to right, oklch(0.52 0.117 195 / 0.06) 1px, transparent 1px),
						linear-gradient(to bottom, oklch(0.52 0.117 195 / 0.06) 1px, transparent 1px)
					`,
					backgroundSize: '48px 48px',
				}}
			/>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-3xl mx-auto text-center"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance mb-6 leading-tight">
						Pronto para organizar{' '}
						<span className="text-primary">seu negócio?</span>
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-10 max-w-2xl mx-auto leading-relaxed">
						Seja um dos primeiros a usar o SymPro. Inscreva-se e fique por dentro do
						lançamento.
					</p>

					<CTALaunching />

					<div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
						{[
							{ icon: '🎯', label: 'Fácil de usar' },
							{ icon: '⚡', label: 'Resultados rápidos' },
							{ icon: '💬', label: 'Suporte dedicado' },
						].map((item) => (
							<div key={item.label} className="flex items-center gap-2">
								<span className="text-base">{item.icon}</span>
								<span>{item.label}</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
