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
		title: 'Chega de anotar em três lugares diferentes',
		description:
			'Agendamento, cliente e pagamento num só lugar. Abriu o SymPro, viu tudo.',
		featured: true,
	},
	{
		icon: Clock,
		iconBg: 'bg-blue-50',
		iconColor: 'text-blue-500',
		title: 'Menos de 10 minutos por dia na gestão',
		description:
			'Registre atendimentos e pagamentos em segundos, no intervalo entre uma cliente e outra.',
		featured: false,
	},
	{
		icon: Wallet,
		iconBg: 'bg-emerald-50',
		iconColor: 'text-emerald-600',
		title: 'Você sabe quanto lucrou esse mês?',
		description:
			'Total de receitas, despesas e saldo na tela. Sem planilha, sem chute.',
		featured: false,
	},
	{
		icon: Smartphone,
		iconBg: 'bg-violet-50',
		iconColor: 'text-violet-600',
		title: 'Funciona no celular, tablet ou computador',
		description: 'Sem app para baixar. Abriu o navegador, está no SymPro.',
		featured: false,
	},
	{
		icon: UserCheck,
		iconBg: 'bg-orange-50',
		iconColor: 'text-orange-500',
		title: 'Seus clientes se sentindo especiais',
		description:
			'Histórico, preferências e anotações de cada pessoa. Atenda cada cliente do jeito que ela gosta.',
		featured: false,
	},
	{
		icon: Bell,
		iconBg: 'bg-amber-50',
		iconColor: 'text-amber-500',
		title: 'Aniversário e retorno: você nunca mais esquece',
		description:
			'O SymPro avisa quando um cliente faz aniversário e quando chegou a hora de entrar em contato.',
		featured: false,
	},
	{
		icon: Lightbulb,
		iconBg: 'bg-yellow-50',
		iconColor: 'text-yellow-500',
		title: 'Melhora todo mês',
		description:
			'Desenvolvemos ouvindo quem usa. Sugestões viram funcionalidades de verdade.',
		featured: true,
	},
	{
		icon: ShieldCheck,
		iconBg: 'bg-green-50',
		iconColor: 'text-green-600',
		title: 'Seus dados protegidos, sem você se preocupar',
		description:
			'Criptografia, LGPD e backup automático. Seus dados e os dos seus clientes ficam seguros.',
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
										${isWide ? 'md:flex md:gap-6 md:items-center' : ''}
									`}
								>
									<div
										className={`
											rounded-2xl flex items-center justify-center shrink-0
											${feature.iconBg}
											${isWide ? 'w-16 h-16 mb-4 md:w-20 md:h-20 md:mb-0' : 'w-16 h-16 mb-4'}
										`}
									>
										<Icon className={`${feature.iconColor} ${isWide ? 'w-8 h-8 md:w-10 md:h-10' : 'w-8 h-8'}`} />
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
