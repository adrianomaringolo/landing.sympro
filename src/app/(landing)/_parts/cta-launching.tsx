import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Dialog, DialogContent, DialogTitle } from 'buildgrid-ui'
import { useState } from 'react'
import { SubscribeForm } from './subscribe-form'

export const CTALaunching = () => {
	const [isOpen, setIsOpen] = useState(false)
	const openModal = () => {
		setIsOpen(true)
	}
	const closeModal = () => {
		setIsOpen(false)
	}
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 className="text-xl sm:text-lg lg:text-2xl font-bold">
				Pronto para transformar seu negócio?
			</h2>
			<p className="text-muted-foreground">
				Estamos criando algo incrível! Inscreva-se para receber as notícias e ficar ligado
				ao nosso lançamento
			</p>

			<div className="mt-4">
				<ShimmerButton
					className="m-3 bg-primary text-2xl cursor-pointer"
					onClick={openModal}
				>
					Quero me inscrever
				</ShimmerButton>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogTitle className="space-y-2 mb-4 text-center">
						Inscreva-se para novidades
					</DialogTitle>
					<SubscribeForm onClose={closeModal} />
				</DialogContent>
			</Dialog>
		</div>
	)
}
