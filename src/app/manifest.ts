import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'SymPro',
		short_name: 'SymPro',
		description: 'SymPro é um aplicativo que te ajuda a controlar suas finanças',
		start_url: '/',
		background_color: '#ffffff',
		theme_color: '#286355',
		icons: [
			{
				src: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
