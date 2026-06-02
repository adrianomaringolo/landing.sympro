'use client'

import { Card, CardContent } from 'buildgrid-ui'
import { motion, type Variants } from 'framer-motion'
import { Clock, DollarSign, Users } from 'lucide-react'
import Image from 'next/image'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 40, scale: 0.97 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const pillars = [
	{
		icon: Users,
		title: 'Gestão de Clientes',
		description:
			'Histórico completo, preferências e follow-ups automáticos para você nunca perder uma oportunidade de relacionamento.',
		image: '/images/client-management.jpg',
		iconColor: 'text-blue-600',
		iconBg: 'bg-blue-50 border border-blue-200',
	},
	{
		icon: Clock,
		title: 'Gestão de Tempo',
		description:
			'Agenda inteligente que otimiza seu dia. Visualize compromissos, evite conflitos e ganhe clareza sobre sua semana.',
		image: '/images/time-management.jpg',
		iconColor: 'text-violet-600',
		iconBg: 'bg-violet-50 border border-violet-200',
	},
	{
		icon: DollarSign,
		title: 'Gestão Financeira',
		description:
			'Controle receitas e despesas com relatórios que mostram onde seu negócio está e para onde está indo.',
		image: '/images/financial-management.jpg',
		iconColor: 'text-emerald-600',
		iconBg: 'bg-emerald-50 border border-emerald-200',
	},
]

export const PillarsSection = () => {
	return (
		<section id="pilares" className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-2xl mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Três pilares para o seu{' '}
						<span className="text-primary">negócio crescer</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty leading-relaxed">
						Desenvolvemos o SymPro para cobrir as três áreas que mais consomem tempo do
						profissional autônomo — e que mais impactam o crescimento do negócio.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-80px' }}
					className="grid md:grid-cols-3 gap-6 max-w-6xl"
				>
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon
						return (
							<motion.div key={index} variants={itemVariants}>
								<Card className="border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.52_0.117_195_/_0.08)] h-full bg-card/80">
									<CardContent className="p-6">
										<div
											className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5`}
										>
											<Icon className={`h-6 w-6 ${pillar.iconColor}`} />
										</div>
										<h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
										<p className="text-muted-foreground leading-relaxed mb-6 text-sm">
											{pillar.description}
										</p>
										<div className="aspect-video bg-muted/30 rounded-xl overflow-hidden relative border border-border/40">
											<Image
												src={pillar.image}
												alt={pillar.title}
												fill
												className="object-cover"
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
