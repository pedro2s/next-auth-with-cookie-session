import { logout } from '@/actions';
import React from 'react';

const LogoutForm = () => {
	return (
		<form action={logout}>
			<button className="text-xl font-medium">Logout</button>
		</form>
	);
};

export default LogoutForm;
