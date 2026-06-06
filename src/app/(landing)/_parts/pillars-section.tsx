'use client'

import { motion, type Variants } from 'framer-motion'
import { Clock, DollarSign, Users, type LucideIcon } from 'lucide-react'
import Image from 'next/image'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 28 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

type Pillar = {
	icon: LucideIcon
	title: string
	description: string
	image: string
	iconBg: string
	iconColor: string
	overlayColor: string
}

const pillars: Pillar[] = [
	{
		icon: Users,
		title: 'Gestão de Clientes',
		description:
			'Histórico completo, preferências e follow-ups automáticos para você nunca perder uma oportunidade de relacionamento.',
		image: '/images/client-management.jpg',
		iconBg: 'bg-blue-50 ring-1 ring-blue-200/80',
		iconColor: 'text-blue-600',
		overlayColor: 'from-blue-950/40',
	},
	{
		icon: Clock,
		title: 'Gestão de Tempo',
		description:
			'Agenda inteligente que otimiza seu dia. Visualize compromissos, evite conflitos e ganhe clareza sobre sua semana.',
		image: '/images/time-management.jpg',
		iconBg: 'bg-violet-50 ring-1 ring-violet-200/80',
		iconColor: 'text-violet-600',
		overlayColor: 'from-violet-950/40',
	},
	{
		icon: DollarSign,
		title: 'Gestão Financeira',
		description:
			'Controle receitas e despesas com relatórios que mostram onde seu negócio está e para onde está indo.',
		image: '/images/financial-management.jpg',
		iconBg: 'bg-emerald-50 ring-1 ring-emerald-200/80',
		iconColor: 'text-emerald-600',
		overlayColor: 'from-emerald-950/40',
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
					className="max-w-2xl mx-auto text-center mb-16"
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
					className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto items-start"
				>
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border/50"
								style={{ boxShadow: '0 2px 12px rgb(0 0 0 / 0.06)' }}
								whileHover={{
									y: -6,
									boxShadow: '0 20px 48px rgb(0 0 0 / 0.11)',
									transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
								}}
							>
								{/* Image with overlay gradient */}
								<div className="relative overflow-hidden aspect-[4/3]">
									<Image
										src={pillar.image}
										alt={pillar.title}
										fill
										className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t ${pillar.overlayColor} via-transparent to-transparent`}
									/>
								</div>

								{/* Icon badge overlapping the boundary */}
								<div className="relative px-5 -mt-5">
									<div
										className={`w-10 h-10 rounded-xl ${pillar.iconBg} bg-card flex items-center justify-center shadow-md ring-[3px] ring-card`}
									>
										<Icon className={`h-5 w-5 ${pillar.iconColor}`} />
									</div>
								</div>

								{/* Content */}
								<div className="px-5 pt-3 pb-6">
									<h3 className="text-base font-bold mb-1.5 text-foreground">
										{pillar.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{pillar.description}
									</p>
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
