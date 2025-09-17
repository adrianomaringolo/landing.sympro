'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
							<span className="text-primary-foreground text-4xl">
								<Image src="/logo-white.png" alt="Logo SymPro" width={24} height={24} />
							</span>
						</div>
						<span className="text-xl font-bold text-foreground">SymPro</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<a
							href="#beneficios"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Benefícios
						</a>
						{/* <a
							href="#depoimentos"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Depoimentos
						</a> */}
						<a
							href="#funcionalidades"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Funcionalidades
						</a>
						<a
							href="#planos"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Planos
						</a>
						<a
							href="#contato"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Contato
						</a>
					</nav>

					{/* CTA Button */}
					{/* <div className="hidden md:flex items-center space-x-4">
						<Button
							variant="ghost"
							className="text-muted-foreground hover:text-foreground"
						>
							Entrar
						</Button>
						<Button className="bg-primary hover:bg-primary/90">
							Iniciar teste grátis
						</Button>
					</div> */}

					{/* Mobile Menu Button */}
					<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t">
						<nav className="flex flex-col space-y-4">
							<a
								href="#beneficios"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Benefícios
							</a>
							{/* <a
								href="#depoimentos"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Depoimentos
							</a> */}
							<a
								href="#funcionalidades"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Funcionalidades
							</a>
							<a
								href="#planos"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Planos
							</a>
							<a
								href="#contato"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								Contato
							</a>
							{/* <div className="flex flex-col space-y-2 pt-4">
								<Button variant="ghost">Entrar</Button>
								<Button className="bg-primary hover:bg-primary/90">
									Iniciar teste grátis
								</Button>
							</div> */}
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
