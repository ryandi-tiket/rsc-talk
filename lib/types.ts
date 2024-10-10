import { z } from 'zod'
import { likesSchema, productListSchema, productSchema, userSchema } from './schema'

export type Product = z.infer<typeof productSchema>
export type ProductList = z.infer<typeof productListSchema>
export type User = z.infer<typeof userSchema>
export type Likes = z.infer<typeof likesSchema>
