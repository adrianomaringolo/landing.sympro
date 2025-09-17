'use client'

import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'buildgrid-ui'

export const FeaturesSection = () => {
	const features = [
		{
			icon: '📅',
			title: 'Tudo organizado em um só lugar',
			description:
				'Chega de cadernos ou planilhas confusas. Aqui você tem seus clientes, agendamentos e pagamentos sempre à mão.',
		},
		{
			icon: '⏱️',
			title: 'Mais tempo para o que importa',
			description:
				'Deixe a parte burocrática com a gente e aproveite para se dedicar ao seu atendimento com mais tranquilidade.',
		},
		{
			icon: '💳',
			title: 'Seu financeiro sem complicação',
			description:
				'Registre suas entradas e despesas de forma simples e acompanhe como anda o seu negócio.',
		},
		{
			icon: '📲',
			title: 'Praticidade no dia a dia',
			description:
				'Acesse pelo celular, tablet ou computador, de onde estiver. É só entrar e usar, sem dor de cabeça.',
		},
		{
			icon: '🤝',
			title: 'Atendimento mais profissional',
			description:
				'Envie lembretes, mantenha tudo organizado e passe ainda mais confiança para os seus clientes.',
		},
		{
			icon: '🔔',
			title: 'Lembretes automáticos',
			description:
				'Nunca mais esqueça de um retorno: receba alertas sobre aniversários, agendamentos e clientes que precisam de contato.',
		},
		{
			icon: '💡',
			title: 'Cresça com a gente',
			description:
				'Estamos sempre melhorando e ouvindo você. Novas funcionalidades e melhorias para ajudar no seu dia a dia.',
		},
		{
			icon: '🔒',
			title: 'Seus dados sempre protegidos',
			description:
				'Levamos a segurança a sério. Seus dados e os dos seus clientes estão sempre protegidos com a gente.',
		},
	]

	return (
		<section id="beneficios" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
						O que oferecemos
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
						Benefícios para você, <span className="text-primary">profissional</span>
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
						O apoio que você precisa para cuidar do seu negócio com tranquilidade e
						facilidade. Estamos aqui para ajudar!
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="border-border/50 hover:border-accent/50 transition-colors text-4xl"
						>
							<CardHeader>
								<div className="mb-4">{feature.icon}</div>
								<CardTitle className="text-xl">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									{feature.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
