import { Badge, Card, CardContent } from 'buildgrid-ui'
import { Globe, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const TeamSection = () => {
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
		<section id="team" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
						Nosso time
					</Badge>
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
						Conheça quem está por trás do <span className="text-primary">SymPro</span>
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
						Nosso time reunido para criar uma solução simples e inovadora para você e seu
						negócio.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							className="border-border/50 hover:border-accent/50 transition-colors text-center"
						>
							<CardContent className="pt-6">
								<div className="mb-6">
									<div className="relative w-24 h-24 mx-auto mb-4">
										<Image
											src={member.image || '/placeholder.svg'}
											alt={`${member.name}`}
											width={96}
											height={96}
											className="w-full h-full object-cover rounded-full border-2 border-accent/20"
										/>
									</div>
									<h3 className="text-xl font-semibold mb-1">{member.name}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{member.description}
									</p>
									<div className="flex justify-center gap-2 text-gray-600 mt-4">
										{member.instagram ? (
											<Link
												href={member.instagram}
												className="hover:text-gray-950"
												target="_blank"
											>
												<Instagram />
											</Link>
										) : null}
										{member.website ? (
											<Link
												href={member.website}
												className="hover:text-gray-950"
												target="_blank"
											>
												<Globe />
											</Link>
										) : null}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
