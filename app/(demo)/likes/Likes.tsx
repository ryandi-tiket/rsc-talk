import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { getLikes } from '@/lib/services/likes'
import { getUser } from '@/lib/services/user'
import { LikesCount } from './LikesCount'

export const Likes = () => {
	const likesPromise = getLikes()
	const userPromise = getUser()

	return (
		<section className="max-w-lg mx-auto">
			<ErrorBoundary fallback={<div>Sorry! Likes failed to load</div>}>
				<Suspense fallback={<div>Loading likes...</div>}>
					<LikesCount userPromise={userPromise} likesPromise={likesPromise} />
				</Suspense>
			</ErrorBoundary>
		</section>
	)
}
