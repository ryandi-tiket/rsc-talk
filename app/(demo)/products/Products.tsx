import { Suspense } from 'react'
import { Card } from '@/components/Card'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ProductCard } from '@/components/ProductCard'
import { getProducts } from '@/lib/services/products'

export const ProductsError = () => (
	<Card className="border-red-200">
		<div className="text-red-700 font-semibold">Sorry! Products failed to load</div>
	</Card>
)

export const ProductsSkeleton = () => (
	<section className="flex flex-col w-full gap-4">
		{Array.from({ length: 3 }).map((_, i) => (
			<div key={i} className="h-[5.25rem] rounded w-full bg-blue-100 animate-pulse" />
		))}
	</section>
)

export const ProductsSection = async () => {
	const products = await getProducts()

	return (
		<div className="flex flex-col gap-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export const Products = () => (
	<section className="max-w-lg mx-auto">
		<ErrorBoundary fallback={<ProductsError />}>
			<Suspense fallback={<ProductsSkeleton />}>
				<ProductsSection />
			</Suspense>
		</ErrorBoundary>
	</section>
)
