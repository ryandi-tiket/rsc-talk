export const incrementLike = async (newLikesCount: number) => {
	const response = await fetch('http://localhost:3000/api/likes', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ likes: newLikesCount }),
	})

	if (!response.ok) {
		return { status: 'error' }
	}

	return { status: 'success' }
}
