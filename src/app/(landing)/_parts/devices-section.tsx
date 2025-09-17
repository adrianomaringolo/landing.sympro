'use client'
import Image from 'next/image'

export const DeviceSection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
						Sua organização em <span className="text-primary"> qualquer dispositivo</span>
					</h2>

					<p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
						SymPro é acessível em smartphones, tablets e desktops, garantindo que você
						tenha controle total do seu negócio onde quer que esteja.
					</p>
					<Image
						src="/images/devices-mockup.png"
						alt="Devices showing the SymPro app"
						width={1200}
						height={600}
						className="mx-auto"
					/>
				</div>
			</div>
		</section>
	)
}
