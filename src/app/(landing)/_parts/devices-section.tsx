'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const DeviceSection = () => {
	return (
		<section className="py-20 bg-gradient-to-b from-background to-muted/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-6xl mx-auto text-center"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
						Sua organização em <span className="text-primary">qualquer dispositivo</span>
					</h2>

					<p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
						SymPro é acessível em smartphones, tablets e desktops, garantindo que você
						tenha controle total do seu negócio onde quer que esteja.
					</p>
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent blur-2xl" />
						<Image
							src="/images/devices-mockup.png"
							alt="Devices showing the SymPro app"
							width={1200}
							height={600}
							className="mx-auto relative z-10 drop-shadow-2xl"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
