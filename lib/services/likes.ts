import { likesSchema } from '../schema'

export const getLikes = async () => {
	const res = await fetch('http://localhost:3000/api/likes', {
		cache: 'no-store',
		next: {
			tags: ['likes'],
		},
	})
	const json = await res.json()
	return likesSchema.parse(json)
}
