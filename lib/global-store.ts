import { create } from 'zustand'

type GlobalState = {
	isMenuOpen: boolean
	openMenu: () => void
	closeMenu: () => void
	toggleMenu: () => void
	setIsMenuOpen: (isMenuOpen: boolean) => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
	isMenuOpen: false,
	openMenu: () => set({ isMenuOpen: true }),
	closeMenu: () => set({ isMenuOpen: false }),
	toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
	setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
}))
