'use client'

import { motion, type Variants } from 'framer-motion'
import {
	Bell,
	CalendarDays,
	Clock,
	Lightbulb,
	ShieldCheck,
	Smartphone,
	UserCheck,
	Wallet,
	type LucideIcon,
} from 'lucide-react'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const features: {
	icon: LucideIcon
	iconBg: string
	iconColor: string
	title: string
	description: string
	featured: boolean
}[] = [
	{
		icon: CalendarDays,
		iconBg: 'bg-teal-50',
		iconColor: 'text-teal-600',
		title: 'Tudo organizado em um só lugar',
		description:
			'Chega de cadernos ou planilhas confusas. Clientes, agendamentos e pagamentos sempre à mão.',
		featured: true,
	},
	{
		icon: Clock,
		iconBg: 'bg-blue-50',
		iconColor: 'text-blue-500',
		title: 'Mais tempo para o que importa',
		description:
			'Deixe a parte burocrática com a gente e dedique mais atenção ao seu atendimento.',
		featured: false,
	},
	{
		icon: Wallet,
		iconBg: 'bg-emerald-50',
		iconColor: 'text-emerald-600',
		title: 'Financeiro sem complicação',
		description:
			'Registre entradas e despesas de forma simples e acompanhe o fôlego do seu negócio.',
		featured: false,
	},
	{
		icon: Smartphone,
		iconBg: 'bg-violet-50',
		iconColor: 'text-violet-600',
		title: 'Praticidade no dia a dia',
		description: 'Celular, tablet ou computador — acesse de onde estiver, sem instalar nada.',
		featured: false,
	},
	{
		icon: UserCheck,
		iconBg: 'bg-orange-50',
		iconColor: 'text-orange-500',
		title: 'Atendimento mais profissional',
		description:
			'Envie lembretes, mantenha tudo registrado e transmita mais confiança para seus clientes.',
		featured: false,
	},
	{
		icon: Bell,
		iconBg: 'bg-amber-50',
		iconColor: 'text-amber-500',
		title: 'Lembretes automáticos',
		description:
			'Receba alertas sobre aniversários, agendamentos e clientes que precisam de contato.',
		featured: false,
	},
	{
		icon: Lightbulb,
		iconBg: 'bg-yellow-50',
		iconColor: 'text-yellow-500',
		title: 'Evolui junto com você',
		description:
			'Estamos sempre melhorando e ouvindo quem usa. Novas funcionalidades todo mês.',
		featured: true,
	},
	{
		icon: ShieldCheck,
		iconBg: 'bg-green-50',
		iconColor: 'text-green-600',
		title: 'Seus dados sempre protegidos',
		description:
			'Levamos segurança a sério. Seus dados e os dos seus clientes ficam protegidos conosco.',
		featured: false,
	},
]

export const FeaturesSection = () => {
	return (
		<section id="beneficios" className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-2xl mx-auto mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						O apoio que você precisava{' '}
						<span className="text-primary">para o dia a dia</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Pensamos em cada detalhe para facilitar a rotina do profissional autônomo.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-80px' }}
					className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
				>
					{features.map((feature, index) => {
						const isFeatured0 = index === 0
						const isFeatured6 = index === 6
						const isLast = index === 7
						const isWide = isFeatured0 || isFeatured6 || isLast
						const Icon = feature.icon

						return (
							<motion.div
								key={index}
								variants={itemVariants}
								className={
									isFeatured0 || isFeatured6
										? 'md:col-span-2'
										: isLast
											? 'md:col-span-3'
											: ''
								}
							>
								<div
									className={`
										h-full rounded-2xl border border-border/50 bg-card/70 p-6
										hover:border-primary/40 hover:shadow-[0_0_24px_oklch(0.52_0.117_195_/_0.07)]
										transition-all duration-300
										${isWide ? 'flex gap-6 items-center' : ''}
									`}
								>
									<div
										className={`
											rounded-2xl flex items-center justify-center shrink-0
											${feature.iconBg}
											${isWide ? 'w-20 h-20' : 'w-16 h-16 mb-4'}
										`}
									>
										<Icon className={`${feature.iconColor} ${isWide ? 'w-10 h-10' : 'w-8 h-8'}`} />
									</div>
									<div>
										<h3 className="font-bold text-base mb-2 leading-snug text-foreground">
											{feature.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
