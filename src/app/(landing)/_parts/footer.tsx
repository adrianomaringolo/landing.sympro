'use client'

import Image from 'next/image'

export const Footer = () => {
	return (
		<footer id="contato" className="border-t border-border/40 bg-muted/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
					{/* Brand */}
					<div className="flex flex-col gap-1">
						<Image src="/logo-letter.png" alt="SymPro" width={100} height={44} />
						<span className="text-xs text-muted-foreground">
							Gestão simples para o seu negócio
						</span>
					</div>

					{/* Nav links */}
					<nav className="flex flex-wrap gap-6">
						{[
							{ href: '#pilares', label: 'Pilares' },
							{ href: '#beneficios', label: 'Benefícios' },
							{ href: '#funcionalidades', label: 'Funcionalidades' },
							{ href: '#planos', label: 'Planos' },
							{ href: '#team', label: 'Time' },
						].map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						))}
					</nav>
				</div>

				<div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} SymPro. Todos os direitos reservados.
					</p>
					<div className="flex items-center gap-4 text-xs text-muted-foreground">
						<span>Dúvidas ou sugestões?</span>
						<a
							href="mailto:sympro.contato@gmail.com"
							className="text-primary hover:underline underline-offset-2"
						>
							sympro.contato@gmail.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
