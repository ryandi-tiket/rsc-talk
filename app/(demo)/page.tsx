import { Header } from './header/Header'
import { Products } from './products/Products'
import { Menu } from './menu/Menu'
import { Hero } from './hero/Hero'

export default async function LandingPage() {
	return (
		<>
			<main>
				<Header />
				<Hero />
				<div className="mt-8">
					<Products />
				</div>
			</main>

			<Menu />
		</>
	)
}
