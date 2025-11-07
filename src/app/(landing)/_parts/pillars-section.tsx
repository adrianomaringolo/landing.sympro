'use client'

import { Badge, Card, CardContent } from 'buildgrid-ui'
import { motion, type Variants } from 'framer-motion'
import { Clock, DollarSign, Users } from 'lucide-react'

export const PillarsSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1] as any,
			},
		},
	}
	const pillars = [
		{
			icon: Users,
			title: 'Gestão de Carteira de Clientes',
			description:
				'Organize e acompanhe todos os seus clientes em um só lugar. Histórico completo, preferências e follow-ups automáticos para nunca perder uma oportunidade.',
			image: 'https://app.sympro.com.br/images/education/client-management.jpg',
			color: 'text-blue-600',
			bgColor: 'bg-blue-50',
		},
		{
			icon: Clock,
			title: 'Gestão de Tempo',
			description:
				'Agenda inteligente que otimiza seu dia. Visualize compromissos, evite conflitos e maximize sua produtividade com lembretes automáticos.',
			image: 'https://app.sympro.com.br/images/education/time-management.jpg',
			color: 'text-purple-600',
			bgColor: 'bg-purple-50',
		},
		{
			icon: DollarSign,
			title: 'Gestão Financeira',
			description:
				'Controle completo das suas finanças. Acompanhe receitas, despesas e tenha relatórios detalhados para tomar decisões estratégicas.',
			image: 'https://app.sympro.com.br/images/education/financial-management.jpg',
			color: 'text-green-600',
			bgColor: 'bg-green-50',
		},
	]

	return (
		<section id="pilares" className="py-20 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="text-center mb-16"
				>
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
						Os 3 Pilares
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
						Transforme seu negócio com{' '}
						<span className="text-primary">gestão completa</span>
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
						Nossa plataforma foi desenvolvida para atender as três áreas essenciais do seu
						negócio, trazendo organização e crescimento sustentável.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
				>
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon
						return (
							<motion.div key={index} variants={itemVariants}>
								<Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
									<CardContent>
										<div
											className={`w-16 h-16 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-6`}
										>
											<Icon className={`h-8 w-8 ${pillar.color}`} />
										</div>
										<h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{pillar.description}
										</p>
										<div className="aspect-video bg-muted/30 rounded-lg overflow-hidden">
											<img
												src={pillar.image}
												alt={pillar.title}
												className="w-full h-full object-cover"
											/>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
