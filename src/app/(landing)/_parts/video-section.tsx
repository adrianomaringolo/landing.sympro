'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const VIDEO_ID = '1a2BJCf_080'

export const VideoSection = () => {
	const [playing, setPlaying] = useState(false)

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
						{playing ? (
							<iframe
								src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
								title="SymPro — vídeo de apresentação"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="absolute inset-0 w-full h-full"
							/>
						) : (
							<button
								onClick={() => setPlaying(true)}
								aria-label="Assistir vídeo de apresentação do SymPro"
								className="absolute inset-0 w-full h-full group cursor-pointer"
							>
								<Image
									src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
									alt="Thumbnail do vídeo de apresentação do SymPro"
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 896px"
									onError={(e) => {
										const img = e.currentTarget
										if (!img.src.includes('hqdefault')) {
											img.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`
										}
									}}
								/>
								<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
										<svg
											className="w-8 h-8 text-primary ml-1"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
								</div>
							</button>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
