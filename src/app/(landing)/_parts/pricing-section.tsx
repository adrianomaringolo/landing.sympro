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
import { CheckCircle } from 'lucide-react'

export const PricingSection = () => {
	const plans = [
		{
			name: 'Gratuito',
			price: 'R$ 0',
			period: 'mês',
			description: 'Para conhecer nossa ferramenta e começar a  organizar',
			features: [
				'Até 50 lançamentos/mês',
				'Até 20 clientes ativos',
				'Até 30 agendamentos/mês',
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
			price: 'R$ 49,90',
			period: 'mês',
			description:
				'Ideal para o profissional individual quer quer tirar o maior proveito da ferramenta e crescer',
			features: [
				'Lançamentos ilimitados',
				'Até 100 clientes ativos',
				'Agendamentos ilimitados',
				'Relatórios detalhados',
				'1 usuário',
				'Suporte prioritário via email e chat',
				'Mais integrações',
			],
			popular: true,
			button: 'Iniciar teste grátis',
		},
		{
			name: 'Empresa',
			price: 'a definir',
			period: 'mês',
			description:
				'Para sua equipe que precisa de uma solução personalizada e suporte dedicado',
			features: [
				'Lançamentos ilimitados',
				'Sem limites de clientes ativos',
				'Agendamentos ilimitados',
				'Relatórios detalhados e exportação de dados',
				'Até 10 usuários',
				'Suporte prioritário via email e chat',
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
				<div className="text-center mb-16">
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
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{plans.map((plan, index) => (
						<Card
							key={index}
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
									<span className="text-4xl font-bold">{plan.price}</span>
									<span className="text-muted-foreground">/{plan.period}</span>
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
					))}
				</div>
			</div>
		</section>
	)
}
