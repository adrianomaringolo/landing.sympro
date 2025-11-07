'use client'

import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'buildgrid-ui'
import { motion, type Variants } from 'framer-motion'

export const FeaturesSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.16, 1, 0.3, 1] as any,
			},
		},
	}
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
		<section
			id="beneficios"
			className="py-20 bg-gradient-to-b from-muted/30 to-background"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="text-center mb-16"
				>
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-sm px-4 py-2">
						O que oferecemos
					</Badge>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
						Benefícios para você, <span className="text-primary">profissional</span>
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
						O apoio que você precisa para cuidar do seu negócio com tranquilidade e
						facilidade. Estamos aqui para ajudar!
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{features.map((feature, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group h-full">
								<CardHeader>
									<div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									<CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-sm leading-relaxed">
										{feature.description}
									</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
