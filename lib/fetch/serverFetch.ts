import { cookies } from 'next/headers'

export const serverFetch = async (url: string, options?: RequestInit) => {
	const headers = new Headers()
	const cookieStore = await cookies()
	const token = cookieStore.get('token')

	if (token) {
		headers.set('Authorization', `Bearer ${token.value}`)
	}

	return fetch(url, { headers, ...options })
}
