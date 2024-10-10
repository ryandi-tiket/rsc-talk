import { cookies } from 'next/headers'
import { userSchema } from '../schema'
import { serverFetch } from '../fetch/serverFetch'

export const getUser = async () => {
	const cookieStore = await cookies()
	const token = cookieStore.get('token')
	// logged-out user sees login form almost instantaneously
	if (!token) return null

	const res = await serverFetch('http://localhost:3000/api/user')
	if (!res.ok) return null
	const user = await res.json()
	return userSchema.parse(user)
}
