'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
	{
		question: 'O SymPro tem um plano gratuito?',
		answer:
			'Sim. O plano gratuito inclui cadastro de clientes e serviços, controle financeiro básico, agenda completa e relatórios básicos. Você pode começar sem cartão de crédito e fazer upgrade quando precisar de mais recursos. Para mais detalhes veja a nossos planos.',
	},
	{
		question: 'Funciona no celular?',
		answer:
			'Sim, totalmente. O SymPro é responsivo e funciona bem em smartphones, tablets e computadores. Não importa onde você estiver — a ferramenta vai com você.',
	},
	{
		question: 'Preciso instalar algum aplicativo?',
		answer:
			'Não. O SymPro é 100% web. Basta abrir o navegador do seu celular ou computador e acessar. Sem instalação, sem atualizações manuais.',
	},
	{
		question: 'Meus dados ficam protegidos?',
		answer:
			'Sim. Utilizamos criptografia em trânsito e em repouso, seguimos as melhores práticas de segurança e cumprimos com a LGPD. Seus dados e os dos seus clientes ficam protegidos.',
	},
	{
		question: 'Quando o SymPro estará disponível?',
		answer:
			'Estamos em fase final de desenvolvimento. Inscreva-se para ser um dos primeiros a acessar e receber atualizações sobre o lançamento.',
	},
	{
		question: 'Preciso de experiência com tecnologia para usar?',
		answer:
			'Nenhuma. O SymPro foi pensado para profissionais que não são de tecnologia. Se você usa WhatsApp, você consegue usar o SymPro — a interface é direta e sem jargão.',
	},
	{
		question: 'Posso cancelar quando quiser?',
		answer:
			'Sim, sem burocracia. Você pode cancelar sua assinatura a qualquer momento, direto nas configurações da conta, sem precisar falar com ninguém. Não há fidelidade ou multa.',
	},
	{
		question: 'O que acontece com meus dados se eu cancelar?',
		answer:
			'Seus dados são seus. Antes de cancelar — ou a qualquer momento — você pode exportar clientes, histórico financeiro e agendamentos em formato padrão. Nada se perde.',
	},
]

export const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-2xl mx-auto text-center mb-14"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Perguntas <span className="text-primary">frequentes</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Ainda tem dúvidas? Estamos aqui para ajudar.
					</p>
				</motion.div>

				<div className="max-w-2xl mx-auto space-y-2">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-40px' }}
							transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
						>
							<div
								className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
									openIndex === index
										? 'border-primary/40 bg-card/80'
										: 'border-border/50 bg-card/40 hover:border-border'
								}`}
							>
								<button
									className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
									onClick={() => toggle(index)}
									aria-expanded={openIndex === index}
								>
									<span className="font-semibold text-sm leading-snug text-foreground">
										{faq.question}
									</span>
									<span
										className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
											openIndex === index
												? 'bg-primary border-primary text-primary-foreground rotate-45'
												: 'border-border/60 text-muted-foreground'
										}`}
									>
										<Plus className="w-3.5 h-3.5" />
									</span>
								</button>

								<AnimatePresence initial={false}>
									{openIndex === index && (
										<motion.div
											key="answer"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
										>
											<p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					))}
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center text-sm text-muted-foreground mt-10"
				>
					Mais dúvidas?{' '}
					<a
						href="mailto:sympro.contato@gmail.com"
						className="text-primary hover:underline underline-offset-2"
					>
						Fale com a gente
					</a>
				</motion.p>
			</div>
		</section>
	)
}
