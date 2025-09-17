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
				<meta name="application-name" content="SymPro" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="SymPro" />
				<meta name="description" content="Organize as finanças dos seus serviços" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-config" content="/icons/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#000000" />

				<link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
				<link rel="shortcut icon" href="/favicon.png" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://sympro.com.br" />
				<meta name="twitter:title" content="SymPro" />
				<meta
					name="twitter:description"
					content="Organize as finanças dos seus serviços"
				/>
				<meta
					name="twitter:image"
					content="https://yourdomain.com/icons/android-chrome-192x192.png"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="SymPro" />
				<meta
					property="og:description"
					content="Organize as finanças dos seus serviços"
				/>
				<meta property="og:site_name" content="SymPro" />
				<meta property="og:url" content="https://sympro.com.br" />
				<meta
					property="og:image"
					content="https://yourdomain.com/icons/apple-touch-icon.png"
				/>

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>SymPro</title>
			</head>

			<body>
				<PageContentArea>{children}</PageContentArea>
				<Analytics />
			</body>
		</html>
	)
}
