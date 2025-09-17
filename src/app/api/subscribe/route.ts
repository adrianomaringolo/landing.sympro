import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const body = await req.json()

	const response = await fetch(
		'https://script.google.com/macros/s/AKfycbwDxumOrf0qJB51Hf3CcU_82QPKp4HTeDq0WPUSSwn9wUk16GbilLCctOVMz5tK-2VM/exec',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		},
	)

	const data = await response.json()
	return NextResponse.json(data)
}
