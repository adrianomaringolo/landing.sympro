'use client'

import { motion } from 'framer-motion'
import { BarChart2, Target, Users } from 'lucide-react'

const TEAL = 'oklch(0.52 0.117 195)'

const followUpClients = [
	{ name: 'Ana Paula',   days: 45, status: 'red',    label: 'Atrasada' },
	{ name: 'Carla Melo',  days: 28, status: 'yellow', label: 'Atenção' },
	{ name: 'Juliana R.',  days: 12, status: 'green',  label: 'Em dia' },
	{ name: 'Priya Singh', days: 5,  status: 'blue',   label: 'Recente' },
]

const statusColor: Record<string, { dot: string; badge: string; text: string }> = {
	red:    { dot: 'bg-red-500',    badge: 'bg-red-50 text-red-600',       text: 'Sem contato há 45 dias' },
	yellow: { dot: 'bg-amber-400',  badge: 'bg-amber-50 text-amber-600',   text: 'Sem contato há 28 dias' },
	green:  { dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-600', text: 'Sem contato há 12 dias' },
	blue:   { dot: 'bg-blue-400',   badge: 'bg-blue-50 text-blue-600',     text: 'Atendida há 5 dias' },
}

export const DiferenciaisSection = () => {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-2xl mx-auto mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						O que nenhuma planilha{' '}
						<span className="text-primary">consegue fazer</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Três funcionalidades que fazem a diferença real no dia a dia de quem trabalha com atendimento.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

					{/* ── 1. Follow-up semáforo ── */}
					<motion.div
						initial={{ opacity: 0, y: 32 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="rounded-2xl border border-border/50 bg-card/70 p-6 flex flex-col"
					>
						<div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
							<Users className="w-7 h-7 text-red-500" />
						</div>
						<h3 className="text-lg font-bold mb-2">Quais clientes estão sumidas?</h3>
						<p className="text-sm text-muted-foreground leading-relaxed mb-6">
							O semáforo de follow-up mostra quem precisa de contato agora, quem está em atenção e quem está em dia — sem você precisar lembrar.
						</p>

						{/* Mock semáforo */}
						<div className="mt-auto rounded-xl border border-border/40 bg-background overflow-hidden">
							<div className="px-3 py-2 border-b border-border/30 text-xs font-semibold text-muted-foreground">
								Follow-up de clientes
							</div>
							<ul className="divide-y divide-border/30">
								{followUpClients.map((c) => {
									const s = statusColor[c.status]
									return (
										<li key={c.name} className="flex items-center justify-between px-3 py-2.5">
											<div className="flex items-center gap-2">
												<span className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.dot}`} />
												<span className="text-xs font-medium text-foreground">{c.name}</span>
											</div>
											<span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.badge}`}>
												{c.label}
											</span>
										</li>
									)
								})}
							</ul>
						</div>
					</motion.div>

					{/* ── 2. Metas ── */}
					<motion.div
						initial={{ opacity: 0, y: 32 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="rounded-2xl border border-border/50 bg-card/70 p-6 flex flex-col"
					>
						<div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
							<Target className="w-7 h-7 text-teal-600" />
						</div>
						<h3 className="text-lg font-bold mb-2">Você vai bater a meta esse mês?</h3>
						<p className="text-sm text-muted-foreground leading-relaxed mb-6">
							Defina uma meta mensal e o SymPro distribui automaticamente por dia útil. Você sabe, todo dia, se está no caminho certo.
						</p>

						{/* Mock metas */}
						<div className="mt-auto rounded-xl border border-border/40 bg-background p-4 space-y-4">
							<div>
								<div className="flex justify-between text-xs mb-1.5">
									<span className="font-semibold text-foreground">Meta do mês</span>
									<span className="text-muted-foreground">R$ 2.160 / R$ 3.000</span>
								</div>
								<div className="h-2 rounded-full bg-muted overflow-hidden">
									<motion.div
										className="h-full rounded-full"
										style={{ background: TEAL }}
										initial={{ width: 0 }}
										whileInView={{ width: '72%' }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
									/>
								</div>
								<p className="text-[10px] text-muted-foreground mt-1">72% — faltam 8 dias úteis</p>
							</div>
							<div>
								<div className="flex justify-between text-xs mb-1.5">
									<span className="font-semibold text-foreground">Meta de hoje</span>
									<span className="text-muted-foreground">R$ 320 / R$ 375</span>
								</div>
								<div className="h-2 rounded-full bg-muted overflow-hidden">
									<motion.div
										className="h-full rounded-full bg-emerald-500"
										initial={{ width: 0 }}
										whileInView={{ width: '85%' }}
										viewport={{ once: true }}
										transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
									/>
								</div>
								<p className="text-[10px] text-muted-foreground mt-1">85% — quase lá!</p>
							</div>
						</div>
					</motion.div>

					{/* ── 3. Relatórios ── */}
					<motion.div
						initial={{ opacity: 0, y: 32 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="rounded-2xl border border-border/50 bg-card/70 p-6 flex flex-col"
					>
						<div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mb-5">
							<BarChart2 className="w-7 h-7 text-violet-600" />
						</div>
						<h3 className="text-lg font-bold mb-2">Qual serviço dá mais lucro?</h3>
						<p className="text-sm text-muted-foreground leading-relaxed mb-6">
							Relatórios mostram seus clientes mais valiosos, serviços mais lucrativos e a evolução do seu faturamento mês a mês.
						</p>

						{/* Mock relatório */}
						<div className="mt-auto rounded-xl border border-border/40 bg-background overflow-hidden">
							<div className="px-3 py-2 border-b border-border/30 text-xs font-semibold text-muted-foreground">
								Serviços — junho
							</div>
							<ul className="divide-y divide-border/30">
								{[
									{ name: 'Coloração',  value: 1240, pct: 100 },
									{ name: 'Corte',      value: 840,  pct: 68 },
									{ name: 'Hidratação', value: 420,  pct: 34 },
								].map((item) => (
									<li key={item.name} className="px-3 py-2.5">
										<div className="flex justify-between text-xs mb-1.5">
											<span className="font-medium text-foreground">{item.name}</span>
											<span className="text-muted-foreground">R$ {item.value.toLocaleString('pt-BR')}</span>
										</div>
										<div className="h-1.5 rounded-full bg-muted overflow-hidden">
											<motion.div
												className="h-full rounded-full bg-violet-400"
												initial={{ width: 0 }}
												whileInView={{ width: `${item.pct}%` }}
												viewport={{ once: true }}
												transition={{ duration: 0.8, delay: 0.5 + item.pct * 0.003, ease: [0.16, 1, 0.3, 1] }}
											/>
										</div>
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
