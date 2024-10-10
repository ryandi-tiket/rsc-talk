'use client'
import { use, useOptimistic, useTransition } from 'react'
import { Likes, User } from '@/lib/types'
import { incrementLike } from '../actions/incrementLike'
import { useRouter } from 'next/navigation'

export const LikesCount = ({
	userPromise,
	likesPromise,
}: {
	userPromise: Promise<User | null>
	likesPromise: Promise<Likes>
}) => {
	const user = use(userPromise)
	const { likes } = use(likesPromise)
	const [isPending, startTransition] = useTransition()
	const [optimisticLikes, setOptimisticLikes] = useOptimistic(
		likes,
		(state, newState: number) => newState
	)
	const router = useRouter()

	const handleIncrement = () => {
		const randomizedIncrement = Math.floor(Math.random() * 100) + 100

		startTransition(async () => {
			setOptimisticLikes(likes + randomizedIncrement)
			const { status } = await incrementLike(likes + randomizedIncrement)
			if (status === 'success') {
				// ideally we only revalidate the likes count (inside the server function itself),
				// but somehow I ran into weird issue (maybe canary)
				router.refresh()
			}
		})
	}

	return (
		<div className="flex gap-8 items-center justify-between">
			<div className="font-semibold text-blue-800">{optimisticLikes} users have liked our OTA!</div>

			{user && (
				<button
					type="button"
					disabled={isPending}
					onClick={() => handleIncrement()}
					className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-md disabled:opacity-50"
				>
					{isPending ? 'Incrementing…' : 'Increment likes'}
				</button>
			)}
		</div>
	)
}
