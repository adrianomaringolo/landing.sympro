'use client'

import {
	Badge,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'buildgrid-ui'
import { motion, type Variants } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'

export const PricingSection = () => {
	const [isAnnual, setIsAnnual] = useState(false)

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	}

	const itemVariants: Variants = {
		hidden: { opacity: 0, scale: 0.9, y: 30 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.16, 1, 0.3, 1] as any,
			},
		},
	}

	const formatPrice = (price: number | null) => {
		if (price === null) return 'a definir'
		if (price === 0) return 'R$ 0'
		return `R$ ${price.toFixed(2).replace('.', ',')}`
	}

	const plans = [
		{
			name: 'Gratuito',
			monthlyPrice: 0,
			annualPrice: 0,
			description: 'Para conhecer nossa ferramenta e começar a  organizar',
			features: [
				'Cadastro de clientes',
				'Cadastro de serviços',
				'Agenda completa',
				'Relatórios básicos',
				'1 usuário',
				'Suporte básico via email',
				'Integrações limitadas',
			],
			popular: false,
			button: 'Começar grátis',
		},
		{
			name: 'Profissional',
			monthlyPrice: 49.9,
			annualPrice: 39.9,
			description:
				'Ideal para o profissional individual quer quer tirar o maior proveito da ferramenta e crescer',
			features: [
				'Tudo do plano gratuito',
				'Follow-up inteligente e aniversariantes',
				'Personalização do dashboard',
				'Novas visualizações da agenda',
				'Central de Educação - conteúdos e cursos educativos',
				'Relatórios detalhados',
				'1 usuário',
				'Suporte prioritário via email e chat',
				'Mais integrações',
			],
			popular: true,
			button: 'Iniciar teste grátis',
		},
		{
			name: 'Profissional+',
			monthlyPrice: 99.9,
			annualPrice: 85.9,
			description:
				'Para sua equipe que precisa de uma solução personalizada e suporte dedicado',
			features: [
				'Tudo do plano Profissional',
				'Ainda mais relatórios detalhados e exportação de dados',
				'Até 3 usuários',
				'Agendas e carteira de clientes compartilhadas',
				'Suporte prioritário via email e chat',
				'Automação de mensagens',
				'Mais integrações para sua equipe',
				'Onboarding e treinamento personalizado',
				'Prioridade no desenvolvimento de novas funcionalidades',
			],
			popular: false,
			button: 'Contatar equipe de vendas',
		},
	]

	return (
		<section id="planos" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="text-center mb-16"
				>
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
						Nossos planos
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
						Simples, flexível e transparente{' '}
						<span className="text-primary">para sua necessidade</span>
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
						Escolha o plano que atende suas necessidades. Todos os planos incluem nossos
						recursos principais e suporte.
					</p>

					{/* Toggle de período */}
					<div className="flex items-center justify-center mt-8 mb-8">
						<div className="flex items-center bg-muted rounded-lg p-1">
							<button
								onClick={() => setIsAnnual(false)}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
									!isAnnual
										? 'bg-background text-foreground shadow-sm'
										: 'text-muted-foreground hover:text-foreground'
								}`}
							>
								Mensal
							</button>
							<button
								onClick={() => setIsAnnual(true)}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
									isAnnual
										? 'bg-background text-foreground shadow-sm'
										: 'text-muted-foreground hover:text-foreground'
								}`}
							>
								Anual
								<Badge className="ml-2 bg-accent/20 text-accent text-xs">
									com desconto
								</Badge>
							</button>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
				>
					{plans.map((plan, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card
								className={`flex flex-col h-full relative ${plan.popular ? 'border-accent shadow-lg scale-105' : 'border-border/50'}`}
							>
								{plan.popular && (
									<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
										Mais popular
									</Badge>
								)}
								<CardHeader className="text-center">
									<CardTitle className="text-2xl">{plan.name}</CardTitle>
									<div className="mt-4">
										<span className="text-4xl font-bold">
											{formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
										</span>
										<span className="text-muted-foreground">/mês</span>
										{isAnnual && plan.annualPrice > 0 && (
											<>
												<div className="text-sm text-muted-foreground mt-1">
													{formatPrice(plan.annualPrice * 12)} cobrado anualmente
												</div>
												{plan.monthlyPrice > 0 && (
													<div className="text-sm text-green-600 font-medium mt-1">
														Economize{' '}
														{formatPrice(plan.monthlyPrice * 12 - plan.annualPrice * 12)}{' '}
														(
														{Math.round(
															((plan.monthlyPrice * 12 - plan.annualPrice * 12) /
																(plan.monthlyPrice * 12)) *
																100,
														)}
														%) no ano
													</div>
												)}
											</>
										)}
									</div>
									<CardDescription className="mt-2">{plan.description}</CardDescription>
								</CardHeader>
								<CardContent className="flex-1 flex flex-col justify-between">
									<ul className="space-y-3 mb-6">
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center">
												<CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
												<span className="text-sm">{feature}</span>
											</li>
										))}
									</ul>
									<Button
										disabled
										className={`w-full mt-auto ${plan.popular ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'}`}
										size="lg"
									>
										{plan.button}
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
