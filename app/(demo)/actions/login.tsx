'use server'
import { cookies } from 'next/headers'

type State =
	| {
			status: 'success' | 'idle'
	  }
	| {
			status: 'error'
			errorMessage: string
	  }

export const login = async (prevState: State, formData: FormData): Promise<State> => {
	const username = formData.get('username')
	const password = formData.get('password')

	if (!username || !password) {
		return { status: 'error', errorMessage: 'Username and password are required' }
	}

	const response = await fetch('http://localhost:3000/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	})

	if (!response.ok) {
		return { status: 'error', errorMessage: 'Invalid credentials' }
	}

	const { token } = await response.json()
	const cookieStore = await cookies()
	cookieStore.set('token', token)

	return { status: 'success' }
}
