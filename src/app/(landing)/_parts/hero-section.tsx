'use client'

import { Badge, cn } from 'buildgrid-ui'
import { Finger_Paint, Mitr } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import { CTALaunching } from './cta-launching'

const fingerPaint = Finger_Paint({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})

const mitr = Mitr({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
})

export const HeroSection = () => {
	return (
		<>
			<div
				className="absolute inset-0 z-0"
				style={{
					background: 'white',
					backgroundImage: `
						linear-gradient(to right, rgba(71,85,105,0.1) 1px, transparent 1px),
						linear-gradient(to bottom, rgba(71,85,105,0.1) 1px, transparent 1px),
						radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.1) 30%, transparent 80%)
					`,
					backgroundSize: '32px 32px, 32px 32px, 100% 100%',
				}}
			/>
			<section className="relative py-20 lg:py-25 overflow-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="max-w-4xl mx-auto text-center">
						<Badge className="mb-6 bg-blue-900/50 text-base ">
							🚀 Lançamento em 22 de setembro
						</Badge>

						<h1
							className={cn(
								mitr.className,
								'text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 uppercase text-gray-800',
							)}
						>
							Diga{' '}
							<span className={cn(fingerPaint.className, 'text-primary text-[1.5em]')}>
								SYM
							</span>
							<br />
							<span className="text-2xl sm:text-3xl lg:text-4xl leading-1">
								para mais
								<br />
								<TypeAnimation
									preRenderFirstString={true}
									sequence={[
										3000,
										'controle 🗒️',
										3000,
										'tempo ⏳',
										3000,
										'clientes 👥',
										3000,
										'crescimento 📈',
										3000,
										'organização 🗂️',
										3000,
										'tranquilidade 🧘',
										3000,
										'relacionamento ❤️',
										3000,
										'eficiência 🚀',
										3000,
										'rendimentos 💰',
										3000,
									]}
									className="text-primary text-3xl sm:text-4xl lg:text-5xl font-semibold"
									speed={20}
									repeat={Infinity}
								/>
							</span>
						</h1>

						<p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
							Transforme a organização do seu negócio com nossa plataforma. Controle
							clientes, agendamentos e finanças em um só lugar.
						</p>

						{/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Button
							size="lg"
							className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
						>
							Experimente Grátis
							<ArrowRight className="ml-2 h-5 w-5" />
						</Button>
						<Button size="lg" variant="secondary" className="text-lg px-8 py-3">
							Veja uma demonstração
						</Button>
					</div> 
					
					<p className="text-sm text-muted-foreground mt-4">
						<span className="font-semibold">Sem necessidade de cartão de crédito</span> •
						14 dias de teste gratuito • Cancele a qualquer momento
					</p>
					*/}

						<CTALaunching />
					</div>
				</div>
			</section>
		</>
	)
}
