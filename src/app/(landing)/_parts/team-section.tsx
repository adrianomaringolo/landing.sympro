'use client'

import { motion, type Variants } from 'framer-motion'
import { Globe, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const teamMembers = [
	{
		name: 'Daniela Pontes',
		role: 'Consultora de Negócios e Saúde',
		description:
			'Biomédica e especialista em Biossegurança, com ampla atuação na área da saúde e beleza. Criadora do curso "Biossegurança Descomplicada", professora de pós-graduação em 8 instituições, curadora técnica da Beauty Fair e autora do e-book "Guia de Esterilização para Profissionais da Beleza".',
		image: '/images/team/daniela-pontes.jpeg',
		instagram: 'https://www.instagram.com/danielapontesoficial/',
	},
	{
		name: 'Adriano Maringolo',
		role: 'Desenvolvedor e Co-fundador',
		description:
			'Desenvolvedor com mais de 15 anos de experiência especializado em criar experiências digitais modernas. Atua no desenvolvimento de web apps e websites personalizados, unindo performance, design e usabilidade.',
		image: '/images/team/adriano-maringolo.jpeg',
		instagram: 'https://www.instagram.com/adrianomaringolo.dev/',
		website: 'https://www.adrianomaringolo.dev/',
	},
]

export const TeamSection = () => {
	return (
		<section id="team" className="py-24 bg-muted/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-2xl mx-auto mb-14"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance mb-4 leading-tight">
						Quem está por trás{' '}
						<span className="text-primary">do SymPro</span>
					</h2>
					<p className="text-lg text-muted-foreground text-pretty">
						Um time com experiência real em tecnologia e no mercado de saúde e beleza.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-80px' }}
					className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
				>
					{teamMembers.map((member, index) => (
						<motion.div key={index} variants={itemVariants}>
							<div className="rounded-2xl border border-border/50 bg-card/70 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_oklch(0.52_0.117_195_/_0.07)] transition-all duration-300 h-full">
								<div className="flex items-start gap-5 mb-4">
									<div className="relative shrink-0">
										<Image
											src={member.image || '/placeholder.svg'}
											alt={member.name}
											width={72}
											height={72}
											className="w-18 h-18 object-cover rounded-full border-2 border-primary/30"
											style={{ width: 72, height: 72 }}
										/>
									</div>
									<div>
										<h3 className="text-lg font-bold mb-0.5 text-foreground">{member.name}</h3>
										<p className="text-sm text-primary font-medium">{member.role}</p>
										<div className="flex gap-2 mt-3">
											{member.instagram && (
												<Link
													href={member.instagram}
													className="p-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`Instagram de ${member.name}`}
												>
													<Instagram className="w-4 h-4" />
												</Link>
											)}
											{member.website && (
												<Link
													href={member.website}
													className="p-1.5 rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`Site de ${member.name}`}
												>
													<Globe className="w-4 h-4" />
												</Link>
											)}
										</div>
									</div>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{member.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
