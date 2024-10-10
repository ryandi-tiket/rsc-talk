import Image from 'next/image'
import { getUser } from '@/lib/services/user'
import { HeaderMenuButton } from './HeaderMenuButton'
import { Suspense } from 'react'
import { HeaderLoginForm } from './HeaderLoginForm'

const HeaderSkeleton = () => (
	<div className="flex gap-2">
		<div className="w-32 h-6 bg-blue-50 rounded animate-pulse" />
		<div className="size-6 bg-blue-50 rounded-full animate-pulse" />
	</div>
)

const UserArea = async () => {
	const user = await getUser()

	if (!user) {
		return (
			<div className="flex gap-2 items-center">
				<HeaderLoginForm />
			</div>
		)
	}

	return (
		<div className="flex gap-2 items-center">
			<p className="font-bold">Welcome back, {user.name}</p>
			<Image src={user.avatar} alt="" width={20} height={20} />
		</div>
	)
}

export const Header = () => (
	<header className="h-12 bg-gradient-to-r from-[#007BFF] to-[#00C1EB] flex justify-between gap-2 items-center px-2 text-sm text-blue-50">
		<HeaderMenuButton />

		<Suspense fallback={<HeaderSkeleton />}>
			<UserArea />
		</Suspense>
	</header>
)
