import { Header } from './header/Header'
import { Products } from './products/Products'
import { Menu } from './menu/Menu'
import { Hero } from './hero/Hero'
import { Likes } from './likes/Likes'

export default async function LandingPage() {
	return (
		<>
			<main>
				<Header />
				<Hero />
				<div className="mt-8">
					<Products />
				</div>

				<div className="mt-8">
					<Likes />
				</div>
			</main>

			<Menu />
		</>
	)
}
