'use client'
import { useActionState } from 'react'
import { login } from '../actions/login'

const inputCls =
	'px-2 py-1 bg-blue-50 focus:ring-2 ring-blue-800 focus:outline-none text-blue-900 rounded text-xs font-bold'

export const HeaderLoginForm = () => {
	const [state, formAction, isPending] = useActionState(login, {
		status: 'idle',
	})

	return (
		<div className="flex items-center">
			{state.status === 'error' ? <p className="px-2 mr-2 border-b-2 border-red-700 text-red-100 font-bold">{state.errorMessage}</p> : null}

			<form action={formAction} className="flex gap-2 items-center">
				<input type="text" name="username" className={inputCls} defaultValue="tman" />
				<input type="password" name="password" className={inputCls} defaultValue="temanteman" />
				<button
					type="submit"
					disabled={isPending}
					className="px-2 py-1 bg-blue-100 border text-blue-900 rounded text-xs font-bold disabled:opacity-50"
				>
					{isPending ? 'Loading…' : 'Login'}
				</button>
			</form>
		</div>
	)
}
