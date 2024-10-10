'use client'
import { MenuIcon } from '@/components/MenuIcon'
import { useGlobalStore } from '@/lib/global-store'

export const HeaderMenuButton = () => {
	const toggleMenu = useGlobalStore((store) => store.toggleMenu)

	return (
		<button
			type="button"
			className="p-4 -m-2"
			onClick={() => {
				toggleMenu()
			}}
		>
			<MenuIcon />
		</button>
	)
}
