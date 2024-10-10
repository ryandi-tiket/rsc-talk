import Image from 'next/image'
import { Card } from '@/components/Card'
import { getUser } from '@/lib/services/user'
import { LogoutButton } from './LogoutButton'

const buttonCls = 'bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md disabled:opacity-50'

export const UserCard = async () => {
	const user = await getUser()

	if (!user)
		return (
			<Card className="flex items-center justify-between">
				<p className="font-bold text-blue-900">Guest</p>
			</Card>
		)

	return (
		<Card className="flex justify-between">
			<div className="flex items-center gap-2">
				<Image src={user.avatar} alt="" width={40} height={40} />
				<p className="font-bold text-blue-900">{user.name}</p>
			</div>

			<div className="flex justify-end gap-4">
				<LogoutButton className={buttonCls} />
			</div>
		</Card>
	)
}
