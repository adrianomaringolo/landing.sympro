'use client'

import { motion } from 'framer-motion'

export const VideoSection = () => {
	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-60px' }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-4xl mx-auto"
				>
					<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-black aspect-video">
						<iframe
							src="https://www.youtube.com/embed/1a2BJCf_080?rel=0&modestbranding=1"
							title="SymPro — vídeo de apresentação"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="absolute inset-0 w-full h-full"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
