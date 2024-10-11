'use client'
import { useTransition } from 'react'
import { logout } from '../actions/logout'

export const LogoutButton = ({ className }: { className: string }) => {
	const [isPending, startTransition] = useTransition()

	const handleLogout = () => {
		startTransition(() => {
			logout()
		})
	}

	return (
		<button type="button" onClick={handleLogout} disabled={isPending} className={className}>
			{isPending ? 'Logging out…' : 'Logout'}
		</button>
	)
}
