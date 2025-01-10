'use client';
import React from 'react';
import { login } from '@/actions';

const LoginForm = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [state, formAction] = React.useActionState<any, FormData>(login, undefined);

	return (
		<form action={formAction} className="w-full flex flex-col gap-4 text-zinc-700">
			<input type="text" name="username" required placeholder="username" className="p-4 rounded-lg" />
			<input type="password" name="password" required placeholder="password" className="p-4 rounded-lg" />
			<button className="py-4 text-xl font-medium bg-emerald-700 rounded-lg text-white">Login</button>
			{state?.error && <p className="text-red-500">{state.error}</p>}
		</form>
	);
};

export default LoginForm;
