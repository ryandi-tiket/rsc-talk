'use client'
import { useGlobalStore } from '@/lib/global-store'
import { BottomSheet } from '@/components/BottomSheet'

export const MenuBottomSheet = ({ userCard }: { userCard: React.ReactNode }) => {
	const isMenuOpen = useGlobalStore((store) => store.isMenuOpen)
	const toggleMenu = useGlobalStore((store) => store.toggleMenu)

	return (
		<BottomSheet open={isMenuOpen} title="Menu" onOpenChange={toggleMenu}>
			<section>
				<p>Flights</p>
				<p>Hotels</p>
				<p>To-do</p>
			</section>

			<section className="mt-4">{userCard}</section>
		</BottomSheet>
	)
}
