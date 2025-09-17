import { Badge, Button } from 'buildgrid-ui'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const screenshots = [
	{
		title: 'Painel de acompanhamento',
		description:
			'Tenha uma visão geral dos seus agendamentos, clientes e finanças em um painel intuitivo.',
		image: '/images/screenshots/feature-1-dashboard.jpeg',
	},
	{
		title: 'Lançamentos rápidos',
		description:
			'Registre entradas e despesas em segundos com nosso formulário simplificado.',
		image: '/images/screenshots/feature-2-lancamentos.jpeg',
	},
	{
		title: 'Carteira de clientes',
		description: 'Gerencie suas informações de clientes de forma eficiente e organizada.',
		image: '/images/screenshots/feature-3-clientes.jpeg',
	},
	{
		title: 'Registro de serviços',
		description: 'Gerencie suas informações de serviços de forma eficiente e organizada.',
		image: '/images/screenshots/feature-4-servicos.jpeg',
	},
	{
		title: 'Crie e acompanhe metas',
		description:
			'Defina metas claras e acompanhe seu progresso com relatórios detalhados.',
		image: '/images/screenshots/feature-5-metas.jpeg',
	},
	{
		title: 'Relatórios detalhados',
		description:
			'Gere relatórios financeiros e de agendamentos para tomar decisões informadas.',
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
		const startAutoPlay = () => {
			if (!isPaused) {
				intervalRef.current = setInterval(() => {
					setCurrentSlide((prev) => (prev + 1) % screenshots.length)
				}, 5000)
			}
		}

		startAutoPlay()

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [screenshots.length, isPaused])

	const resetAutoPlay = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % screenshots.length)
			}, 5000)
		}
	}

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % screenshots.length)
		resetAutoPlay()
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
		resetAutoPlay()
	}

	const handleMouseEnter = () => {
		setIsPaused(true)
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
	}

	const handleMouseLeave = () => {
		setIsPaused(false)
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % screenshots.length)
		}, 5000)
	}

	const openLightbox = (image: string) => {
		setLightboxImage(image)
		setLightboxOpen(true)
	}

	const closeLightbox = () => {
		setLightboxOpen(false)
		setLightboxImage('')
	}

	return (
		<section className="py-20" id="funcionalidades">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-accent text-accent-foreground border-accent">
						Funcionalidades
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
						Veja o SymPro <span className="text-primary">em ação</span>
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
						Explore nossa interface intuitiva e recursos poderosos que tornam a
						organização so seu negócio simples e eficaz.
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="relative">
						{/* Carousel Container */}
						<div
							className="overflow-hidden rounded-lg border border-border/50 bg-card"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div
								className="flex transition-transform duration-500 ease-in-out"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{screenshots.map((screenshot, index) => (
									<div key={index} className="w-full flex-shrink-0">
										<div className="grid lg:grid-cols-2 gap-8 p-8 items-center">
											{/* Content */}
											<div className="space-y-6">
												<h3 className="text-2xl font-bold">{screenshot.title}</h3>
												<p className="text-lg text-muted-foreground leading-relaxed">
													{screenshot.description}
												</p>
												<Button disabled className="bg-primary hover:bg-primary/90">
													Teste essa funcionalidade (em breve)
													<ArrowRight className="ml-2 h-4 w-4" />
												</Button>
											</div>

											{/* Screenshot */}
											<div className="relative">
												<div className="aspect-[4/3] rounded-lg overflow-hidden border border-border/50 bg-muted/30">
													<Image
														src={screenshot.image || '/placeholder.svg'}
														alt={screenshot.title}
														width={1000}
														height={500}
														className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
														onClick={() => openLightbox(screenshot.image)}
													/>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Navigation Buttons */}
						<button
							onClick={prevSlide}
							className="absolute left-4 top-1/2 md:top-auto md:bottom-4 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-background transition-colors"
							aria-label="Previous screenshot"
						>
							<ChevronLeft className="h-5 w-5" />
						</button>

						<button
							onClick={nextSlide}
							className="absolute right-4 top-1/2 md:top-auto md:bottom-4 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-background transition-colors"
							aria-label="Next screenshot"
						>
							<ChevronRight className="h-5 w-5" />
						</button>
					</div>

					{/* Dots Indicator */}
					<div className="flex justify-center mt-8 space-x-2">
						{screenshots.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === currentSlide ? 'bg-primary' : 'bg-gray-500/30'
								}`}
								aria-label={`Go to screenshot ${index + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Lightbox Modal */}
				{lightboxOpen && (
					<div
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
						onClick={closeLightbox}
					>
						<div className="relative max-w-7xl max-h-[80vh] w-full">
							<button
								onClick={closeLightbox}
								className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
								aria-label="Close lightbox"
							>
								<X className="h-8 w-8" />
							</button>
							<Image
								src={lightboxImage || '/placeholder.svg'}
								alt="Screenshot in full view"
								width={1400}
								height={1050}
								className="object-contain max-h-[80vh]  rounded-lg"
								onClick={(e) => e.stopPropagation()}
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
