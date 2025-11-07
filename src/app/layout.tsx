import { PageContentArea } from '@/components/navigation/page-content-area'
import { Arimo } from 'next/font/google'
import './globals.css'

import { Analytics } from '@vercel/analytics/next'

// If loading a variable font, you don't need to specify the font weight
const arimo = Arimo({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br" className={arimo.className}>
			<head>
				<meta name="description" content="Organize as finanças dos seus serviços" />
				<meta name="theme-color" content="#008080" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://sympro.com.br" />
				<meta name="twitter:title" content="SymPro - Gestão Completa para seu Negócio" />
				<meta
					name="twitter:description"
					content="Transforme a organização do seu negócio com nossa plataforma completa. Controle clientes, agendamentos e finanças em um só lugar."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="SymPro - Gestão Completa para seu Negócio" />
				<meta
					property="og:description"
					content="Transforme a organização do seu negócio com nossa plataforma completa. Controle clientes, agendamentos e finanças em um só lugar."
				/>
				<meta property="og:site_name" content="SymPro" />
				<meta property="og:url" content="https://sympro.com.br" />

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>SymPro - Gestão Completa para seu Negócio</title>
			</head>

			<body>
				<PageContentArea>{children}</PageContentArea>
				<Analytics />
			</body>
		</html>
	)
}
