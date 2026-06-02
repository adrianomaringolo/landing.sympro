'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, LayoutDashboard, UserPlus } from 'lucide-react'

const steps = [
	{
		number: 1,
		icon: UserPlus,
		title: 'Crie sua conta',
		description:
			'Configure seu perfil em menos de 5 minutos. Sem formulários longos, sem cartão de crédito.',
	},
	{
		number: 2,
		icon: CalendarCheck,
		title: 'Cadastre seus clientes',
		description:
			'Adicione clientes com histórico, contatos e preferências. Importe de uma planilha ou comece do zero.',
	},
	{
		number: 3,
		icon: LayoutDashboard,
		title: 'Controle seu negócio',
		description:
			'Agende atendimentos, registre pagamentos e acompanhe o crescimento do seu negócio em tempo real.',
	},
]

export const HowItWorksSection = () => {
	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-2xl mx-auto mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Começa em minutos,{' '}
						<span className="text-primary">dura para sempre</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Três passos simples para ter seu negócio organizado do jeito que você merece.
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					{/* Desktop: horizontal steps with connector */}
					<div className="hidden md:grid grid-cols-3 gap-0 relative">
						{/* Connector line */}
						<div
							className="absolute top-8 left-[calc(16.6%+1rem)] right-[calc(16.6%+1rem)] h-px"
							style={{
								background:
									'linear-gradient(to right, oklch(0.52 0.117 195 / 0.6), oklch(0.52 0.117 195 / 0.3), oklch(0.52 0.117 195 / 0.6))',
							}}
						/>

						{steps.map((step, index) => {
							const Icon = step.icon
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 32 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: '-60px' }}
									transition={{
										duration: 0.6,
										delay: index * 0.15,
										ease: [0.16, 1, 0.3, 1],
									}}
									className="flex flex-col items-center text-center px-6"
								>
									{/* Step number circle */}
									<div className="relative mb-6 z-10">
										<div
											className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-primary bg-background"
											style={{
												boxShadow: '0 0 0 6px white, 0 0 20px oklch(0.52 0.117 195 / 0.20)',
											}}
										>
											<Icon className="w-7 h-7 text-primary" />
										</div>
										<span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
											{step.number}
										</span>
									</div>

									<h3 className="text-lg font-bold mb-2">{step.title}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
										{step.description}
									</p>
								</motion.div>
							)
						})}
					</div>

					{/* Mobile: vertical steps */}
					<div className="md:hidden space-y-0">
						{steps.map((step, index) => {
							const Icon = step.icon
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -24 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: '-40px' }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
										ease: [0.16, 1, 0.3, 1],
									}}
									className="flex gap-5 pb-10 last:pb-0 relative"
								>
									{/* Vertical connector */}
									{index < steps.length - 1 && (
										<div
											className="absolute left-7 top-16 bottom-0 w-px"
											style={{ background: 'oklch(0.52 0.117 195 / 0.25)' }}
										/>
									)}

									<div className="relative shrink-0 z-10">
										<div
											className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-primary bg-background"
											style={{ boxShadow: '0 0 16px oklch(0.52 0.117 195 / 0.2)' }}
										>
											<Icon className="w-6 h-6 text-primary" />
										</div>
										<span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
											{step.number}
										</span>
									</div>

									<div className="pt-2">
										<h3 className="text-lg font-bold mb-1">{step.title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{step.description}
										</p>
									</div>
								</motion.div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
