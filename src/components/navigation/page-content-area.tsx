'use client'

import { DialogProvider, Toaster } from 'buildgrid-ui'
import { Suspense } from 'react'

export const PageContentArea = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DialogProvider>
				<Suspense>{children}</Suspense>
			</DialogProvider>

			<Toaster expand />
		</>
	)
}
