import { Suspense } from 'react'
import { MenuBottomSheet } from './MenuBottomSheet'
import { UserCard } from './UserCard'

export const Menu = () => {
	return (
		<MenuBottomSheet
			userCard={
				<Suspense fallback={<div>Loading user information…</div>}>
					<UserCard />
				</Suspense>
			}
		/>
	)
}
