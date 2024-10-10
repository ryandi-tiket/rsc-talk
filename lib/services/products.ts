import { z } from 'zod'
import { serverFetch } from '../fetch/serverFetch'

const productSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number(),
	image: z.string(),
})

const productListSchema = z.array(productSchema)

export const getProducts = async () => {
	const res = await serverFetch('http://localhost:3000/api/products')
	if (!res.ok) {
		throw new Error('Failed to fetch products')
	}
	const json = await res.json()
	return productListSchema.parse(json)
}
