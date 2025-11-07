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
						linear-gradient(to right, rgba(71,85,105,0.08) 1px, transparent 1px),
						linear-gradient(to bottom, rgba(71,85,105,0.08) 1px, transparent 1px),
						radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
						radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
					`,
					backgroundSize: '40px 40px, 40px 40px, 100% 100%, 100% 100%',
				}}
			/>
			<section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-12">
				{/* Elementos decorativos flutuantes */}
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="max-w-5xl mx-auto text-center">
						<Badge className="mb-6 bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border-primary/30 text-sm sm:text-base px-4 py-2 animate-fade-in">
							🚀 Lançamento em breve, fique ligado!
						</Badge>

						<h1
							className={cn(
								mitr.className,
								'text-4xl sm:text-5xl lg:text-6xl text-balance mb-6 uppercase text-gray-900 font-bold tracking-tight animate-fade-in-up',
							)}
						>
							Diga{' '}
							<span
								className={cn(
									fingerPaint.className,
									'text-primary text-[1.5em] inline-block transform hover:scale-110 transition-transform duration-300',
								)}
							>
								SYM
							</span>
							<br />
							<span className="text-2xl sm:text-3xl lg:text-4xl leading-tight block mt-3">
								para mais
								<br />
								<TypeAnimation
									preRenderFirstString={true}
									sequence={[
										2000,
										'controle 🗒️',
										2500,
										'tempo ⏳',
										2500,
										'clientes 👥',
										2500,
										'crescimento 📈',
										2500,
										'organização 🗂️',
										2500,
										'tranquilidade 🧘',
										2500,
										'relacionamento ❤️',
										2500,
										'eficiência 🚀',
										2500,
										'rendimentos 💰',
										2500,
									]}
									className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold inline-block min-h-[1.2em]"
									speed={25}
									repeat={Infinity}
								/>
							</span>
						</h1>

						<p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
							Transforme a organização do seu negócio com nossa plataforma completa.
							<span className="block text-base sm:text-lg mt-2">
								Controle clientes, agendamentos e finanças em um só lugar.
							</span>
						</p>

						<div className="animate-fade-in-up animation-delay-400 mb-8">
							<CTALaunching />
						</div>

						{/* Indicadores de confiança */}
						<div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-in animation-delay-600">
							<div className="flex items-center gap-2">
								<span className="text-primary text-lg">✓</span>
								<span>Sem cartão de crédito</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-primary text-lg">✓</span>
								<span>Teste grátis</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-primary text-lg">✓</span>
								<span>Cancele quando quiser</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
