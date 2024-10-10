import { z } from 'zod'

export const productSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number(),
	image: z.string(),
})

export const productListSchema = z.array(productSchema)

export const userSchema = z.object({
	name: z.string(),
	avatar: z.string(),
})
