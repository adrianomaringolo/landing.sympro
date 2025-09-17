export interface SubscriptionFormData {
	renewalPeriod?: string
	renewalDate?: string
	notes?: string
	isBlocked?: boolean
}

export type SubscriptionFormProps = {
	defaultValues?: Partial<SubscriptionFormData>
	onSubmit: (data: SubscriptionFormData) => void
	onCancel: () => void
}
