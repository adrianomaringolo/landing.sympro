'use client'

import { Badge, Card, CardContent } from 'buildgrid-ui'
import { Globe, Instagram } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

export const TeamSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 30 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}
	const teamMembers = [
		{
			name: 'Daniela Pontes',
			description:
				'Biomédica e especialista em Biossegurança, com ampla atuação na área da saúde e beleza. Criadora do curso “Biossegurança Descomplicada”, é professora de pós-graduação em biossegurança na estética e tricologia em 8 instituições de ensino. Desde 2011, atua como curadora técnica de depilação da Beauty Fair e possui pós-graduação em Central de Materiais e Esterilização. Além de palestrante e consultora para espaços de beleza e clínicas odontológicas, é autora do e-book “Guia de Esterilização para Profissionais da Beleza”.',
			image: '/images/team/daniela-pontes.jpeg',
			instagram: 'https://www.instagram.com/danielapontesoficial/',
		},
		{
			name: 'Ana Paula Freitas',
			image: '/images/team/ana-paula-freitas.jpeg',
			description:
				'Atua há 28 anos como depiladora profissional, com especialização no método lipossolúvel. Também é designer de sobrancelhas, especialista em epilação egípcia e massoterapeuta técnica formada pelo Senac. Em sua trajetória, foi palestrante no 14º Congresso de Depilação da Beauty Fair e idealizou o projeto Café Experience, levando conhecimento e experiências para profissionais do interior de São Paulo.',
			instagram: 'https://www.instagram.com/espaco.paulafreitas',
		},
		{
			name: 'Adriano Maringolo',
			description:
				'Desenvolvedor com mais de 15 anos de experiência, especializado em criar experiências digitais modernas. Atua no desenvolvimento de web apps e websites personalizados, unindo performance, design e usabilidade. Além da atuação profissional, também desenvolve projetos autorais e colaborativos, sempre em busca de inovação e aprendizado contínuo.',
			image: '/images/team/adriano-maringolo.jpeg',
			instagram: 'https://www.instagram.com/adrianomaringolo.dev/',
			website: 'https://www.adrianomaringolo.dev/',
		},
	]

	return (
		<section id="team" className="py-20 bg-gradient-to-b from-muted/30 to-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="text-center mb-16"
				>
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-sm px-4 py-2">
						Nosso time
					</Badge>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
						Conheça quem está por trás do <span className="text-primary">SymPro</span>
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
						Nosso time reunido para criar uma solução simples e inovadora para você e seu
						negócio.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
				>
					{teamMembers.map((member, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center group h-full">
								<CardContent className="pt-8 pb-6">
									<div className="mb-6">
										<div className="relative w-32 h-32 mx-auto mb-6">
											<Image
												src={member.image || '/placeholder.svg'}
												alt={`${member.name}`}
												width={128}
												height={128}
												className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors shadow-md"
											/>
										</div>
										<h3 className="text-xl font-bold mb-3 text-gray-900">
											{member.name}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed text-left px-2">
											{member.description}
										</p>
										<div className="flex justify-center gap-3 mt-6">
											{member.instagram ? (
												<Link
													href={member.instagram}
													className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Instagram className="w-5 h-5" />
												</Link>
											) : null}
											{member.website ? (
												<Link
													href={member.website}
													className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Globe className="w-5 h-5" />
												</Link>
											) : null}
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
