const faqs = [
	{
		question: 'O SymPro tem um plano gratuito?',
		answer:
			'Sim. O plano gratuito inclui cadastro de clientes, agenda completa e relatórios básicos. Você pode começar sem cartão de crédito e fazer upgrade quando precisar de mais recursos.',
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

const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'SymPro',
	url: 'https://sympro.com.br',
	description:
		'Plataforma de gestão completa para profissionais autônomos: agenda, clientes e finanças em um só lugar.',
	inLanguage: 'pt-BR',
	publisher: {
		'@type': 'Organization',
		name: 'SymPro',
	},
}

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'SymPro',
	url: 'https://sympro.com.br',
	logo: 'https://sympro.com.br/logo.png',
	email: 'sympro.contato@gmail.com',
	description:
		'Plataforma de gestão completa para profissionais autônomos e pequenos negócios de serviços no Brasil.',
	foundingLocation: {
		'@type': 'Place',
		addressCountry: 'BR',
	},
}

const softwareSchema = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: 'SymPro',
	url: 'https://sympro.com.br',
	applicationCategory: 'BusinessApplication',
	operatingSystem: 'Web',
	offers: {
		'@type': 'Offer',
		price: '0',
		priceCurrency: 'BRL',
		description: 'Plano gratuito disponível',
	},
	description:
		'Software de gestão para profissionais autônomos. Controle clientes, agendamentos e finanças em um só lugar.',
	featureList: [
		'Agenda de agendamentos',
		'CRM de clientes',
		'Controle financeiro',
		'Relatórios e metas',
		'Catálogo de serviços',
	],
	audience: {
		'@type': 'Audience',
		audienceType:
			'Fisioterapeutas, personal trainers, esteticistas, cabeleireiros, profissionais autônomos',
	},
	inLanguage: 'pt-BR',
	isAccessibleForFree: true,
}

const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.answer,
		},
	})),
}

export function StructuredData() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
		</>
	)
}
