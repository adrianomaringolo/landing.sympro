import { PageContentArea } from '@/components/navigation/page-content-area'
import { Manrope } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

import { Analytics } from '@vercel/analytics/next'

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: 'SymPro — Gestão para Profissionais Autônomos',
	description:
		'Plataforma completa para fisioterapeutas, personal trainers, esteticistas e outros profissionais autônomos. Controle clientes, agendamentos e finanças em um só lugar. Plano gratuito disponível.',
	metadataBase: new URL('https://sympro.com.br'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: 'https://sympro.com.br',
		siteName: 'SymPro',
		title: 'SymPro — Gestão para Profissionais Autônomos',
		description:
			'Plataforma completa para fisioterapeutas, personal trainers, esteticistas e outros profissionais autônomos. Controle clientes, agendamentos e finanças em um só lugar.',
		images: [
			{
				url: '/images/devices-mockup.png',
				width: 1200,
				height: 630,
				alt: 'SymPro — plataforma de gestão para profissionais autônomos',
			},
		],
		locale: 'pt_BR',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SymPro — Gestão para Profissionais Autônomos',
		description:
			'Controle clientes, agendamentos e finanças em um só lugar. Plano gratuito disponível.',
		images: ['/images/devices-mockup.png'],
	},
	robots: {
		index: true,
		follow: true,
	},
	keywords: [
		'gestão para fisioterapeutas',
		'software para personal trainer',
		'sistema para esteticistas',
		'agenda para profissionais autônomos',
		'controle financeiro autônomo',
		'CRM para prestadores de serviço',
		'gestão de clientes',
		'software de agendamento',
	],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" className={manrope.className}>
			<head>
				<meta name="theme-color" content="#008080" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<PageContentArea>{children}</PageContentArea>
				<Analytics />
			</body>
		</html>
	)
}
