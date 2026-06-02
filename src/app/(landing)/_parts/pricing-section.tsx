'use client'

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'buildgrid-ui'
import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, scale: 0.95, y: 24 },
	visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const plans = [
	{
		name: 'Gratuito',
		monthlyPrice: 0,
		annualPrice: 0,
		description: 'Para conhecer a ferramenta e começar a organizar seu negócio.',
		features: [
			'Cadastro de clientes',
			'Cadastro de serviços',
			'Agenda completa',
			'Relatórios básicos',
			'1 usuário',
			'Central de Educação',
			'Suporte via email',
		],
		popular: false,
		cta: 'Começar grátis',
	},
	{
		name: 'Profissional',
		monthlyPrice: 24.9,
		annualPrice: 21.9,
		description: 'Para o profissional que quer tirar o maior proveito da ferramenta.',
		features: [
			'Tudo do plano gratuito',
			'Follow-up e aniversariantes',
			'Dashboard personalizado',
			'Novas visualizações de agenda',
			'Fichas e campos personalizados',
			'Upload de documentos',
			'Relatórios detalhados',
			'Suporte prioritário',
		],
		popular: true,
		cta: 'Iniciar teste grátis',
	},
	{
		name: 'Profissional+',
		monthlyPrice: 99.9,
		annualPrice: 86.9,
		description: 'Para equipes que precisam de mais capacidade e suporte dedicado.',
		features: [
			'Tudo do plano Profissional',
			'Até 3 usuários',
			'Agendas compartilhadas',
			'Automação de mensagens',
			'Relatórios avançados e exportação',
			'Onboarding personalizado',
			'Prioridade em novas funcionalidades',
		],
		popular: false,
		cta: 'Falar com a equipe',
	},
]

const formatPrice = (price: number) => {
	if (price === 0) return 'R$ 0'
	return `R$ ${price.toFixed(2).replace('.', ',')}`
}

export const PricingSection = () => {
	const [isAnnual, setIsAnnual] = useState(false)

	return (
		<section id="planos" className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-2xl mx-auto mb-12"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Simples, flexível,{' '}
						<span className="text-primary">sem surpresas</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Escolha o plano certo para você. Todos incluem os recursos principais.
					</p>

					{/* Period toggle */}
					<div className="inline-flex items-center mt-8 rounded-xl border border-border/60 bg-muted/30 p-1">
						<button
							onClick={() => setIsAnnual(false)}
							className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
								!isAnnual
									? 'bg-card text-foreground shadow-sm'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Mensal
						</button>
						<button
							onClick={() => setIsAnnual(true)}
							className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
								isAnnual
									? 'bg-card text-foreground shadow-sm'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Anual
							<span className="text-[11px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
								desconto
							</span>
						</button>
					</div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-80px' }}
					className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
				>
					{plans.map((plan, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card
								className={`flex flex-col h-full relative transition-all duration-300 ${
									plan.popular
										? 'border-primary/60 shadow-[0_0_40px_oklch(0.52_0.117_195_/_0.12)] scale-[1.02]'
										: 'border-border/50 hover:border-border'
								}`}
							>
								{plan.popular && (
									<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold whitespace-nowrap">
										Mais popular
									</div>
								)}

								<CardHeader className="text-center pb-4">
									<CardTitle className="text-xl">{plan.name}</CardTitle>
									<div className="mt-4 mb-2">
										<span className="text-4xl font-extrabold">
											{formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
										</span>
										<span className="text-muted-foreground text-sm ml-1">/mês</span>
									</div>
									{isAnnual && plan.monthlyPrice > 0 && (
										<p className="text-xs text-primary font-medium">
											Economize{' '}
											{Math.round(
												((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100,
											)}
											% no ano
										</p>
									)}
									<CardDescription className="mt-2 text-xs leading-relaxed">
										{plan.description}
									</CardDescription>
								</CardHeader>

								<CardContent className="flex-1 flex flex-col justify-between pt-0">
									<ul className="space-y-2.5 mb-6">
										{plan.features.map((feature, fi) => (
											<li key={fi} className="flex items-start gap-2.5">
												<Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
												<span className="text-sm leading-snug">{feature}</span>
											</li>
										))}
									</ul>
									<Button
										disabled
										className={`w-full mt-auto font-semibold ${
											plan.popular
												? 'bg-primary hover:bg-primary/90 text-primary-foreground'
												: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
										}`}
									>
										{plan.cta}
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
