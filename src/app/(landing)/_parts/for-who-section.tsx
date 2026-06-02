'use client'

import { motion } from 'framer-motion'
import {
	Dumbbell,
	Heart,
	Leaf,
	Scissors,
	Smile,
	Sparkles,
	Star,
	UserRound,
	type LucideIcon,
} from 'lucide-react'

const professions: { icon: LucideIcon; label: string; color: string; bg: string }[] = [
	{ icon: Scissors,   label: 'Cabeleireiro(a)',     color: 'text-pink-600',    bg: 'bg-pink-50' },
	{ icon: Sparkles,   label: 'Esteticista',         color: 'text-violet-600',  bg: 'bg-violet-50' },
	{ icon: Dumbbell,   label: 'Personal Trainer',    color: 'text-orange-600',  bg: 'bg-orange-50' },
	{ icon: Heart,      label: 'Fisioterapeuta',      color: 'text-red-500',     bg: 'bg-red-50' },
	{ icon: Star,       label: 'Coach',               color: 'text-amber-500',   bg: 'bg-amber-50' },
	{ icon: Leaf,       label: 'Nutricionista',       color: 'text-green-600',   bg: 'bg-green-50' },
	{ icon: Smile,      label: 'Manicure',            color: 'text-rose-500',    bg: 'bg-rose-50' },
	{ icon: UserRound,  label: 'Massoterapeuta',      color: 'text-teal-600',    bg: 'bg-teal-50' },
]

export const ForWhoSection = () => {
	return (
		<section className="py-24 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="mb-14"
					>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
							Feito para quem trabalha{' '}
							<span className="text-primary">por conta própria</span>
						</h2>
						<p className="text-lg text-muted-foreground text-pretty max-w-2xl leading-relaxed">
							Se você atende clientes, cobra por serviços e precisa de organização, o SymPro é para você.
						</p>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-60px' }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.06 } },
						}}
						className="grid grid-cols-2 sm:grid-cols-4 gap-3"
					>
						{professions.map((p, i) => {
							const Icon = p.icon
							return (
								<motion.div
									key={i}
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
									}}
									className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/70 px-4 py-3.5 hover:border-primary/30 transition-colors duration-200"
								>
									<div className={`w-9 h-9 rounded-lg ${p.bg} flex items-center justify-center shrink-0`}>
										<Icon className={`w-5 h-5 ${p.color}`} />
									</div>
									<span className="text-sm font-medium text-foreground">{p.label}</span>
								</motion.div>
							)
						})}
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mt-6 text-sm text-muted-foreground"
					>
						E para qualquer outro profissional autônomo que presta serviços e quer organizar seu negócio.
					</motion.p>
				</div>
			</div>
		</section>
	)
}
