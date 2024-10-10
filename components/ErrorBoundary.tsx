'use client'
import React from 'react'

export class ErrorBoundary extends React.Component<
	{
		children: React.ReactNode
		fallback?: React.ReactNode
		fallbackRender?: (props: { error: Error; resetError: () => void }) => React.ReactNode
	},
	{ hasError: false } | { hasError: true; error: Error }
> {
	constructor(props: { children: React.ReactNode }) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error }
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	componentDidCatch(error: Error, errorInfo: unknown) {
		console.log('error', error)
		console.log('errorInfo', errorInfo)
	}

	resetError = () => {
		this.setState({ hasError: false })
	}

	render() {
		if (this.state.hasError) {
			const { fallback, fallbackRender } = this.props

			if (fallbackRender) {
				return fallbackRender({ error: this.state.error, resetError: this.resetError })
			}

			if (fallback) {
				return fallback
			}

			return null
		}

		return this.props.children
	}
}
