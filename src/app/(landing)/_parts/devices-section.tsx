'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const DeviceSection = () => {
	return (
		<section className="py-24 bg-muted/20 overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-6xl mx-auto text-center"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-5 leading-tight">
						Seu negócio no bolso,{' '}
						<span className="text-primary">em qualquer tela</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty mb-14 max-w-2xl mx-auto leading-relaxed">
						SymPro funciona em smartphones, tablets e desktops. Você tem controle total
						independente de onde estiver.
					</p>

					<div className="relative">
						<div
							className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
							style={{
								background: 'linear-gradient(to top, oklch(0.97 0.003 197 / 0.9), transparent)',
							}}
						/>
						<div
							className="absolute inset-x-1/4 top-1/4 h-1/2 rounded-full blur-[80px] pointer-events-none -z-10"
							style={{ background: 'oklch(0.52 0.117 195 / 0.05)' }}
						/>
						<Image
							src="/images/devices-mockup.png"
							alt="SymPro funcionando em celular, tablet e computador"
							width={1200}
							height={600}
							className="mx-auto relative z-10 drop-shadow-2xl"
							priority={false}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
