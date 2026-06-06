'use client'

import { Dialog, DialogContent, DialogTitle } from 'buildgrid-ui'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, TrendingUp } from 'lucide-react'
import { Finger_Paint } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { SubscribeForm } from './subscribe-form'

const fingerPaint = Finger_Paint({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})

const TEAL = 'oklch(0.52 0.117 195)'
const BG = 'oklch(0.975 0.005 195)'
const INK = 'oklch(0.18 0.025 200)'
const INK_MUTED = 'oklch(0.44 0.018 200)'
const INK_SUBTLE = 'oklch(0.56 0.012 200)'

const heroImages = [
	{
		src: '/images/hero-professional.jpg',
		alt: 'Profissional autônoma no seu salão, confiante e organizada',
	},
	{
		src: '/images/hero-hairstylist.jpg',
		alt: 'Cabeleireira profissional sorrindo com tesoura e secador',
	},
	{
		src: '/images/hero-trainer.jpg',
		alt: 'Personal trainer sorridente em estúdio, confiante e acolhedora',
	},
	{
		src: '/images/hero-aesthetician.jpg',
		alt: 'Esteticista realizando tratamento facial na cliente',
	},
	{
		src: '/images/hero-physio.jpg',
		alt: 'Fisioterapeuta auxiliando paciente em exercício de reabilitação',
	},
]

export const HeroSection = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		if (isPaused) return
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % heroImages.length)
		}, 8000)
		return () => clearInterval(timer)
	}, [isPaused])

	return (
		<section className="relative overflow-hidden">
			<div className="grid lg:grid-cols-[45%_55%] min-h-[calc(100vh-64px)]">

				{/* ── LEFT: neutral panel with teal grid ── */}
				<div
					className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-16 py-20 z-10"
					style={{ background: BG }}
				>
					{/* Teal grid texture */}
					<div
						aria-hidden
						className="absolute inset-0 pointer-events-none"
						style={{
							backgroundImage: `linear-gradient(oklch(0.52 0.117 195 / 0.07) 1px, transparent 1px), linear-gradient(90deg, oklch(0.52 0.117 195 / 0.07) 1px, transparent 1px)`,
							backgroundSize: '40px 40px',
						}}
					/>
					{/* Radial fade: grid recua ao centro, aparece nas bordas */}
					<div
						aria-hidden
						className="absolute inset-0 pointer-events-none"
						style={{
							background: `radial-gradient(ellipse 85% 85% at 15% 50%, ${BG} 25%, transparent 100%)`,
						}}
					/>

					{/* Launch badge */}
					<div
						className="relative inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-sm font-medium mb-10 animate-fade-in"
						style={{
							border: `1px solid oklch(0.52 0.117 195 / 0.28)`,
							background: 'oklch(0.52 0.117 195 / 0.07)',
							color: TEAL,
						}}
					>
						<span
							className="w-1.5 h-1.5 rounded-full animate-pulse"
							style={{ background: TEAL }}
						/>
						Lançamento em breve — seja um dos primeiros
					</div>

					{/* Headline */}
					<h1
						aria-label="SymPro — diga sim para mais controle, organização e crescimento no seu negócio"
						className="relative font-extrabold leading-[1.05] tracking-tight text-balance mb-6 animate-fade-in-up"
						style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: INK }}
					>
						Diga{' '}
						<span
							className={fingerPaint.className}
							style={{ fontSize: '1.22em', color: TEAL }}
						>
							SYM
						</span>
						<br />
						<span
							className="font-bold"
							style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', color: INK }}
						>
							para mais{' '}
							<TypeAnimation
								preRenderFirstString={true}
								sequence={[
									2000,
									'controle',
									2500,
									'tempo',
									2500,
									'clientes',
									2500,
									'crescimento',
									2500,
									'organização',
									2500,
									'tranquilidade',
									2500,
									'rendimentos',
									2500,
								]}
								className="underline underline-offset-4"
								style={{ textDecorationColor: 'oklch(0.52 0.117 195 / 0.35)' }}
								speed={30}
								repeat={Infinity}
							/>
						</span>
					</h1>

					{/* Tagline */}
					<p
						className="relative text-lg text-pretty mb-10 max-w-md leading-relaxed animate-fade-in-up"
						style={{ color: INK_MUTED }}
					>
						Nunca mais perca um cliente por esquecimento. Agenda, financeiro
						e follow-up em um único lugar.
					</p>

					{/* CTA */}
					<div className="relative mb-10 animate-fade-in-up">
						<motion.button
							onClick={() => setIsOpen(true)}
							className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg cursor-pointer text-white"
							style={{
								background: TEAL,
								boxShadow: `0 12px 32px oklch(0.52 0.117 195 / 0.32)`,
							}}
							whileHover={{ scale: 1.03, boxShadow: `0 20px 48px oklch(0.52 0.117 195 / 0.42)` }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: 'spring', stiffness: 400, damping: 20 }}
						>
							Quero me inscrever
						</motion.button>
					</div>

					{/* Trust badges */}
					<div
						className="relative flex flex-wrap items-center gap-x-5 gap-y-2 text-sm animate-fade-in"
						style={{ color: INK_SUBTLE }}
					>
						{['Sem cartão de crédito', 'Plano gratuito disponível', 'Cancele quando quiser'].map(
							(item) => (
								<div key={item} className="flex items-center gap-1.5">
									<span className="font-bold" style={{ color: TEAL }}>✓</span>
									<span>{item}</span>
								</div>
							),
						)}
					</div>
				</div>

				{/* ── RIGHT: rotating photo panel ── */}
				<div
					className="relative h-72 lg:h-auto"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{/* Crossfading images */}
					<AnimatePresence>
						<motion.div
							key={activeIndex}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1, ease: 'easeInOut' }}
							className="absolute inset-0"
						>
							<Image
								src={heroImages[activeIndex].src}
								alt={heroImages[activeIndex].alt}
								fill
								className="object-cover object-center"
								priority={activeIndex === 0}
								sizes="(max-width: 1024px) 100vw, 55vw"
							/>
						</motion.div>
					</AnimatePresence>

					{/* Blend left edge into neutral on desktop */}
					<div
						aria-hidden
						className="absolute inset-y-0 left-0 w-28 pointer-events-none hidden lg:block z-10"
						style={{
							background: `linear-gradient(to right, ${BG}, oklch(0.975 0.005 195 / 0))`,
						}}
					/>

					{/* Floating card: today's appointments */}
					<motion.div
						initial={{ opacity: 0, x: -16 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
						className="absolute left-6 top-8 lg:left-12 lg:top-14 z-20 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/60 px-4 py-3 flex items-center gap-3"
					>
						<div
							className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
							style={{ background: 'oklch(0.52 0.117 195 / 0.12)' }}
						>
							<CalendarCheck className="w-5 h-5" style={{ color: TEAL }} />
						</div>
						<div>
							<p className="text-xs text-gray-400 leading-none mb-0.5">Hoje</p>
							<p className="text-sm font-semibold text-gray-900">4 atendimentos</p>
						</div>
					</motion.div>

					{/* Floating card: monthly growth */}
					<motion.div
						initial={{ opacity: 0, x: 16 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
						className="absolute right-6 bottom-16 lg:right-10 lg:bottom-14 z-20 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/60 px-4 py-3 flex items-center gap-3"
					>
						<div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
							<TrendingUp className="w-5 h-5 text-emerald-600" />
						</div>
						<div>
							<p className="text-xs text-gray-400 leading-none mb-0.5">Este mês</p>
							<p className="text-sm font-semibold text-gray-900">+23% clientes</p>
						</div>
					</motion.div>

					{/* Image indicator dots */}
					<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
						{heroImages.map((_, i) => (
							<button
								key={i}
								onClick={() => setActiveIndex(i)}
								aria-label={`Ver imagem ${i + 1}`}
								className="p-2 cursor-pointer"
							>
								<span
									className="block h-1.5 rounded-full transition-all duration-500"
									style={{
										width: i === activeIndex ? '24px' : '6px',
										background: i === activeIndex ? 'white' : 'rgba(255,255,255,0.4)',
									}}
								/>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Subscribe dialog */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogTitle className="space-y-2 mb-4 text-center">
						Inscreva-se para novidades
					</DialogTitle>
					<SubscribeForm onClose={() => setIsOpen(false)} />
				</DialogContent>
			</Dialog>
		</section>
	)
}
