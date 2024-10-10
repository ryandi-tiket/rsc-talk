import Image from 'next/image'
import { Card } from './Card'
import { Product } from '@/lib/types'

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card className="flex gap-4 items-center">
			<div className="relative aspect-[3/2] w-32 -m-2">
				<Image src={product.image} alt="" fill sizes="128px" className="rounded" />
			</div>
			<div className="ml-4 w-full flex justify-between">
				<p className="font-bold text-blue-900">{product.name}</p>
				<p className="text-blue-800">${product.price}</p>
			</div>
		</Card>
	)
}
