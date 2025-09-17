'use client'

import { Button, Input, Textarea } from 'buildgrid-ui'
import { useState } from 'react'

type FormData = {
	nome: string
	email: string
	whatsapp: string
	profissao: string
	observacoes: string
}

type SubscribeFormProps = {
	onClose?: () => void
}

export const SubscribeForm = (props: SubscribeFormProps) => {
	const [formData, setFormData] = useState<FormData>({
		nome: '',
		email: '',
		whatsapp: '',
		profissao: '',
		observacoes: '',
	})

	const [status, setStatus] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setStatus(null)

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				body: JSON.stringify(formData),
			})

			const result = await response.json()
			if (result.status === 'success') {
				setStatus('✅ Cadastro enviado com sucesso! Verifique seu e-mail.')
				setFormData({ nome: '', email: '', whatsapp: '', profissao: '', observacoes: '' })
				setTimeout(() => {
					setStatus(null)
					props.onClose?.()
				}, 5000)
			} else {
				setStatus('❌ Ocorreu um erro: ' + result.message)
			}
		} catch {
			setStatus('❌ Erro ao enviar cadastro.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<p className="text-muted-foreground">
				Preencha os dados abaixo para se inscrever e receber notícias sobre nosso
				lançamento. <i>Não se preocupe, enviaremos apenas mensagens relevantes.</i>
			</p>

			<Input
				type="text"
				name="nome"
				placeholder="Nome completo *"
				value={formData.nome}
				onChange={handleChange}
				required
				className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<Input
				type="email"
				name="email"
				placeholder="E-mail *"
				value={formData.email}
				onChange={handleChange}
				required
				className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<Input
				type="text"
				name="whatsapp"
				placeholder="WhatsApp"
				value={formData.whatsapp}
				onChange={handleChange}
				className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<Input
				type="text"
				name="profissao"
				placeholder="Profissão *"
				required
				value={formData.profissao}
				onChange={handleChange}
				className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<Textarea
				name="observacoes"
				placeholder="Como ficou sabendo de nós? Tem alguma dúvida ou sugestão?"
				value={formData.observacoes}
				onChange={handleChange}
				rows={3}
				className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<Button
				size="xl"
				type="submit"
				disabled={loading}
				className="w-full font-semibold py-3"
			>
				{loading ? 'Enviando...' : 'Enviar'}
			</Button>

			{status && (
				<p
					className={`text-center font-medium ${
						status.startsWith('✅') ? 'text-green-600' : 'text-red-600'
					}`}
				>
					{status}
				</p>
			)}
		</form>
	)
}
