import { EXTRA_SLOWDOWN } from '@/demo-config'
import { sleep } from '@/lib/sleep'

/**
 * Get the user detail
 */
export async function GET(request: Request) {
	await sleep(EXTRA_SLOWDOWN ? 3000 : 1000)
	if (!isAuthorized(request)) {
		return Response.json({ error: 'Unauthorized' }, { status: 401 })
	}
	return Response.json({ name: 't-man', avatar: '/t-man.webp' })
}

function isAuthorized(request: Request) {
	const authorization = request.headers.get('Authorization')
	if (authorization !== 'Bearer 123') return false
	return true
}
