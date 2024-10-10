import { sleep } from '@/lib/sleep'

export async function POST(request: Request) {
	await sleep(1000)
	const { username, password } = await request.json()

	if (username === 'tman' && password === 'temanteman') {
		return Response.json({ token: '123' })
	}

	return Response.json({ error: 'Invalid credentials' }, { status: 401 })
}
