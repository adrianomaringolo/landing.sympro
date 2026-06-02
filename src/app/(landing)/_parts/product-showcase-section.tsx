'use client'

import { Button } from 'buildgrid-ui'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const screenshots = [
	{
		title: 'Painel de acompanhamento',
		description:
			'Visão geral dos seus agendamentos, clientes e finanças em um painel intuitivo.',
		image: '/images/screenshots/feature-1-dashboard.jpeg',
	},
	{
		title: 'Lançamentos rápidos',
		description:
			'Registre entradas e despesas em segundos com formulário simplificado.',
		image: '/images/screenshots/feature-2-lancamentos.jpeg',
	},
	{
		title: 'Carteira de clientes',
		description: 'Gerencie informações de clientes de forma eficiente e organizada.',
		image: '/images/screenshots/feature-3-clientes.jpeg',
	},
	{
		title: 'Registro de serviços',
		description: 'Cadastre e gerencie todos os serviços que você oferece.',
		image: '/images/screenshots/feature-4-servicos.jpeg',
	},
	{
		title: 'Crie e acompanhe metas',
		description: 'Defina metas claras e acompanhe seu progresso com relatórios detalhados.',
		image: '/images/screenshots/feature-5-metas.jpeg',
	},
	{
		title: 'Relatórios detalhados',
		description: 'Gere relatórios financeiros e de agendamentos para decidir com dados.',
		image: '/images/screenshots/feature-6-relatorios.jpeg',
	},
]

export const ProductShowcaseSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [lightboxOpen, setLightboxOpen] = useState(false)
	const [lightboxImage, setLightboxImage] = useState('')
	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % screenshots.length)
			}, 5000)
		}
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}
	}, [isPaused])

	const resetAutoPlay = () => {
		if (intervalRef.current) clearInterval(intervalRef.current)
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % screenshots.length)
			}, 5000)
		}
	}

	const nextSlide = () => { setCurrentSlide((p) => (p + 1) % screenshots.length); resetAutoPlay() }
	const prevSlide = () => { setCurrentSlide((p) => (p - 1 + screenshots.length) % screenshots.length); resetAutoPlay() }

	return (
		<section className="py-24 bg-muted/20" id="funcionalidades">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Veja o SymPro{' '}
						<span className="text-primary">em ação</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
						Interface pensada para ser usada de verdade — sem curva de aprendizado.
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="relative">
						<div
							className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl"
							onMouseEnter={() => setIsPaused(true)}
							onMouseLeave={() => setIsPaused(false)}
						>
							<div
								className="flex transition-transform duration-500 ease-in-out"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{screenshots.map((screenshot, index) => (
									<div key={index} className="w-full flex-shrink-0">
										<div className="grid lg:grid-cols-2 gap-8 p-8 items-center">
											<div className="space-y-4 order-2 lg:order-1">
												<p className="text-xs font-semibold text-primary uppercase tracking-widest">
													Funcionalidade {index + 1} de {screenshots.length}
												</p>
												<h3 className="text-2xl font-bold">{screenshot.title}</h3>
												<p className="text-muted-foreground leading-relaxed">
													{screenshot.description}
												</p>
												<Button
													disabled
													className="bg-primary hover:bg-primary/90 text-primary-foreground"
												>
													Testar esta função
													<ArrowRight className="ml-2 h-4 w-4" />
												</Button>
											</div>

											<div className="order-1 lg:order-2">
												<div className="aspect-[4/3] rounded-xl overflow-hidden border border-border/40 bg-muted/30">
													<Image
														src={screenshot.image || '/placeholder.svg'}
														alt={screenshot.title}
														width={1000}
														height={750}
														className="w-full h-full object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-500"
														onClick={() => { setLightboxImage(screenshot.image); setLightboxOpen(true) }}
													/>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Nav buttons */}
						<button
							onClick={prevSlide}
							className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border/60 bg-card/90 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 transition-colors"
							aria-label="Slide anterior"
						>
							<ChevronLeft className="h-4 w-4" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border/60 bg-card/90 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 transition-colors"
							aria-label="Próximo slide"
						>
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>

					{/* Dot indicators */}
					<div className="flex justify-center mt-6 gap-2">
						{screenshots.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								aria-label={`Ver slide ${index + 1}`}
								className="p-2"
							>
								<span
									className={`block transition-all duration-300 rounded-full h-2 ${
										index === currentSlide
											? 'w-6 bg-primary'
											: 'w-2 bg-border hover:bg-muted-foreground'
									}`}
								/>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Lightbox */}
			{lightboxOpen && (
				<div
					className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={() => { setLightboxOpen(false); setLightboxImage('') }}
				>
					<button
						onClick={() => { setLightboxOpen(false); setLightboxImage('') }}
						className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
						aria-label="Fechar imagem"
					>
						<X className="h-5 w-5" />
					</button>
					<Image
						src={lightboxImage || '/placeholder.svg'}
						alt="Screenshot em tela cheia"
						width={1400}
						height={1050}
						className="object-contain max-h-[88vh] rounded-xl"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			)}
		</section>
	)
}
