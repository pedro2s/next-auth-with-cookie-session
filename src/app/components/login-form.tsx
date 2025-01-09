import { login } from '@/actions';
import React from 'react';

const LoginForm = () => {
	return (
		<form action={login} className="w-full flex flex-col gap-4 text-zinc-700">
			<input type="text" name="username" required placeholder="username" className="p-4 rounded-lg" />
			<input type="password" name="password" required placeholder="password" className="p-4 rounded-lg" />
			<button className="py-4 text-xl font-medium bg-emerald-700 rounded-lg text-white">Login</button>
		</form>
	);
};

export default LoginForm;
