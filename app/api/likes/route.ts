import { sleep } from '@/lib/sleep'
import { EXTRA_SLOWDOWN } from '@/demo-config'

let likes = 99

export async function GET() {
	await sleep(EXTRA_SLOWDOWN ? 2000 : 1000)
	// const likes = JSON.parse(fs.readFileSync(pathToJson, 'utf8')).likes
	return Response.json({ likes })
}

export async function PUT(request: Request) {
	await sleep(EXTRA_SLOWDOWN ? 2000 : 1000)
	const { likes: newLikes } = await request.json()
	likes = newLikes
	// fs.writeFileSync(pathToJson, JSON.stringify({ likes }))
	return Response.json({ likes })
}
