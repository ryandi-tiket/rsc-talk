import { z } from 'zod'
import { productListSchema, productSchema, userSchema } from './schema'

export type Product = z.infer<typeof productSchema>
export type ProductList = z.infer<typeof productListSchema>
export type User = z.infer<typeof userSchema>
