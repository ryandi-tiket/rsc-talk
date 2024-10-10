import { EXTRA_SLOWDOWN, INTERMITTENT_PRODUCTS_ERROR } from '@/demo-config'
import { sleep } from '@/lib/sleep'

const products = [
	{
		id: 'flight-1',
		name: 'Jakarta → Tokyo',
		price: 500,
		image: '/tokyo.webp',
	},
	{
		id: 'hotel-2',
		name: 'Apurva',
		price: 400,
		image: '/apurva.webp',
	},
	{
		id: 'attraction-3',
		name: 'Aquarium',
		price: 25,
		image: '/aquarium.webp',
	},
]

export async function GET() {
	await sleep(EXTRA_SLOWDOWN ? 1500 : 500)

	if (INTERMITTENT_PRODUCTS_ERROR && Math.random() < 0.5) {
		return Response.json({ message: 'Internal Server Error' }, { status: 500 })
	}

	return Response.json(products)
}
