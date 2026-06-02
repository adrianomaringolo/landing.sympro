'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Image src="/logo-letter.png" alt="SymPro" width={110} height={48} className="h-10 w-auto" />
					</div>

					<nav className="hidden md:flex items-center space-x-8">
						{[
							{ href: '#beneficios', label: 'Benefícios' },
							{ href: '#funcionalidades', label: 'Funcionalidades' },
							{ href: '#planos', label: 'Planos' },
							{ href: '#contato', label: 'Contato' },
						].map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
							>
								{link.label}
							</a>
						))}
					</nav>

					<button
						className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Abrir menu"
					>
						{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>

				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-border/40">
						<nav className="flex flex-col space-y-4">
							{[
								{ href: '#beneficios', label: 'Benefícios' },
								{ href: '#funcionalidades', label: 'Funcionalidades' },
								{ href: '#planos', label: 'Planos' },
								{ href: '#contato', label: 'Contato' },
							].map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</a>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
