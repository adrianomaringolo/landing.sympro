'use client'

import { motion, type Variants } from 'framer-motion'
import { BookOpen, CheckCircle2, ChevronDown, ChevronRight, Flame, Trophy } from 'lucide-react'

const TEAL = 'oklch(0.52 0.117 195)'
const TEAL_LIGHT = 'oklch(0.72 0.09 195)'
const DARK = 'oklch(0.15 0.04 200)'

const topics = [
	'Precificação',
	'Finanças pessoais',
	'Marketing boca a boca',
	'Relacionamento com clientes',
	'Gestão do tempo',
	'Crescimento do negócio',
]

const mockSeries = [
	{
		title: 'Precificação de Serviços',
		total: 5,
		done: 3,
		expanded: true,
		articles: [
			{ title: 'Por que cobrar pelo seu valor?', read: true },
			{ title: 'Calculando seu custo real', read: true },
			{ title: 'Comunicando preços sem medo', read: true },
			{ title: 'Como lidar com "tá caro"', read: false },
			{ title: 'Reajuste sem perder clientes', read: false },
		],
	},
	{
		title: 'Marketing Boca a Boca',
		total: 4,
		done: 4,
		expanded: false,
		completed: true,
		articles: [],
	},
	{
		title: 'Finanças para Autônomos',
		total: 6,
		done: 1,
		expanded: false,
		articles: [],
	},
]

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const EducationSection = () => {
	return (
		<section style={{ background: DARK }} className="relative overflow-hidden py-24 lg:py-32">

			{/* Grid texture */}
			<div
				aria-hidden
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)`,
					backgroundSize: '40px 40px',
				}}
			/>
			{/* Glow spot */}
			<div
				aria-hidden
				className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
				style={{ background: `radial-gradient(circle, ${TEAL}22 0%, transparent 70%)` }}
			/>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

					{/* ── LEFT: copy ── */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-80px' }}
					>
						{/* Badge */}
						<motion.div variants={itemVariants} className="mb-8">
							<span
								className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
								style={{
									background: `${TEAL}20`,
									border: `1px solid ${TEAL}50`,
									color: TEAL_LIGHT,
								}}
							>
								<BookOpen className="w-3.5 h-3.5" />
								Incluso em todos os planos
							</span>
						</motion.div>

						{/* Headline */}
						<motion.h2
							variants={itemVariants}
							className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight mb-6"
						>
							Aprenda enquanto gerencia.{' '}
							<span style={{ color: TEAL_LIGHT }}>Cresça enquanto atende.</span>
						</motion.h2>

						{/* Subtext */}
						<motion.p
							variants={itemVariants}
							className="text-lg leading-relaxed mb-10"
							style={{ color: 'oklch(0.72 0.01 200)' }}
						>
							O SymPro vai além da agenda e do financeiro. Dentro do app, você acessa uma biblioteca de conteúdo construída para quem presta serviço: precificação, marketing, relacionamento com clientes e muito mais.
						</motion.p>

						{/* Stats */}
						<motion.div
							variants={itemVariants}
							className="grid grid-cols-3 gap-4 mb-10"
						>
							{[
								{ value: '50+', label: 'Artigos exclusivos' },
								{ value: '8', label: 'Séries temáticas' },
								{ value: '🔥', label: 'Sistema de sequência' },
							].map((s) => (
								<div
									key={s.label}
									className="rounded-xl p-4 text-center"
									style={{ background: 'oklch(1 0 0 / 0.05)', border: '1px solid oklch(1 0 0 / 0.08)' }}
								>
									<div className="text-2xl font-extrabold text-white mb-1">{s.value}</div>
									<div className="text-xs leading-snug" style={{ color: 'oklch(0.62 0.01 200)' }}>
										{s.label}
									</div>
								</div>
							))}
						</motion.div>

						{/* Topic pills */}
						<motion.div variants={itemVariants}>
							<p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'oklch(0.50 0.02 200)' }}>
								Conteúdo disponível
							</p>
							<div className="flex flex-wrap gap-2">
								{topics.map((t) => (
									<span
										key={t}
										className="text-sm px-3 py-1 rounded-full"
										style={{
											background: 'oklch(1 0 0 / 0.06)',
											border: '1px solid oklch(1 0 0 / 0.1)',
											color: 'oklch(0.78 0.02 200)',
										}}
									>
										{t}
									</span>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* ── RIGHT: UI mock ── */}
					<motion.div
						initial={{ opacity: 0, x: 32 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<div
							className="rounded-2xl overflow-hidden"
							style={{
								background: 'oklch(0.11 0.03 200)',
								border: '1px solid oklch(1 0 0 / 0.1)',
								boxShadow: `0 32px 80px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(1 0 0 / 0.06)`,
							}}
						>
							{/* Title bar */}
							<div
								className="flex items-center justify-between px-4 py-3 border-b"
								style={{ borderColor: 'oklch(1 0 0 / 0.08)', background: 'oklch(0.13 0.03 200)' }}
							>
								<div className="flex items-center gap-2">
									<BookOpen className="w-4 h-4" style={{ color: TEAL_LIGHT }} />
									<span className="text-sm font-semibold text-white">Central de Educação</span>
								</div>
								{/* Streak badge */}
								<div
									className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
									style={{ background: 'oklch(0.55 0.18 50 / 0.2)', color: 'oklch(0.82 0.16 60)' }}
								>
									<Flame className="w-3.5 h-3.5" />
									7 dias seguidos
								</div>
							</div>

							{/* Stats row */}
							<div
								className="grid grid-cols-3 divide-x py-3"
								style={{ borderColor: 'oklch(1 0 0 / 0.07)', borderBottom: '1px solid oklch(1 0 0 / 0.07)' }}
							>
								{[
									{ n: '23', l: 'artigos lidos' },
									{ n: '2', l: 'séries completas' },
									{ n: '4h', l: 'de estudo' },
								].map((s) => (
									<div key={s.l} className="text-center py-1 px-2">
										<div className="text-base font-extrabold text-white">{s.n}</div>
										<div className="text-[10px]" style={{ color: 'oklch(0.55 0.02 200)' }}>{s.l}</div>
									</div>
								))}
							</div>

							{/* Series list */}
							<div className="p-4 space-y-2">
								{mockSeries.map((serie, si) => {
									const pct = Math.round((serie.done / serie.total) * 100)
									return (
										<div
											key={si}
											className="rounded-xl overflow-hidden"
											style={{ background: 'oklch(0.17 0.03 200)', border: '1px solid oklch(1 0 0 / 0.07)' }}
										>
											{/* Series header */}
											<div className="flex items-center justify-between px-3 py-2.5">
												<div className="flex items-center gap-2 min-w-0">
													{serie.expanded ? (
														<ChevronDown className="w-3.5 h-3.5 shrink-0" style={{ color: TEAL_LIGHT }} />
													) : (
														<ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: 'oklch(0.45 0.02 200)' }} />
													)}
													<span className="text-xs font-semibold text-white truncate">{serie.title}</span>
												</div>
												<div className="flex items-center gap-2 shrink-0">
													{serie.completed && (
														<Trophy className="w-3.5 h-3.5" style={{ color: 'oklch(0.78 0.16 80)' }} />
													)}
													<span className="text-[10px]" style={{ color: 'oklch(0.50 0.02 200)' }}>
														{serie.done}/{serie.total}
													</span>
												</div>
											</div>

											{/* Progress bar */}
											<div className="px-3 pb-2.5">
												<div className="h-1 rounded-full overflow-hidden" style={{ background: 'oklch(0.25 0.03 200)' }}>
													<motion.div
														className="h-full rounded-full"
														style={{ background: serie.completed ? 'oklch(0.68 0.16 163)' : TEAL }}
														initial={{ width: 0 }}
														whileInView={{ width: `${pct}%` }}
														viewport={{ once: true }}
														transition={{ duration: 1, delay: 0.3 + si * 0.15, ease: [0.16, 1, 0.3, 1] }}
													/>
												</div>
											</div>

											{/* Expanded articles */}
											{serie.expanded && serie.articles.length > 0 && (
												<div
													className="border-t divide-y"
													style={{
														borderColor: 'oklch(1 0 0 / 0.06)',
													}}
												>
													{serie.articles.map((art, ai) => (
														<div
															key={ai}
															className="flex items-center gap-2.5 px-4 py-2"
														>
															{art.read ? (
																<CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: TEAL_LIGHT }} />
															) : (
																<div
																	className="w-3.5 h-3.5 rounded-full border shrink-0"
																	style={{ borderColor: 'oklch(0.38 0.02 200)' }}
																/>
															)}
															<span
																className="text-xs truncate"
																style={{ color: art.read ? 'oklch(0.65 0.02 200)' : 'oklch(0.78 0.02 200)' }}
															>
																{art.title}
															</span>
															{ai === 3 && (
																<span
																	className="ml-auto text-[10px] px-1.5 py-0.5 rounded font-semibold shrink-0"
																	style={{ background: `${TEAL}30`, color: TEAL_LIGHT }}
																>
																	Próximo
																</span>
															)}
														</div>
													))}
												</div>
											)}
										</div>
									)
								})}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
