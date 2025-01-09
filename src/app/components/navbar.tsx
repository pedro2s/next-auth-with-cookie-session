import Link from 'next/link';
import React from 'react';
import LogoutForm from './logout-form';
import { getSession } from '@/actions';
import { defaultSession } from '@/lib';

const Navbar = async () => {
	const session = await getSession();

	if (!session.isLoggedIn) {
		session.isLoggedIn = defaultSession.isLoggedIn;
	}
	console.log('session', session);

	return (
		<nav className="flex justify-center gap-4 py-6">
			<Link className="text-xl font-medium" href="/">
				Home
			</Link>
			<Link className="text-xl font-medium" href="/premium">
				Premium
			</Link>
			<Link className="text-xl font-medium" href="/profile">
				Profile
			</Link>
			<Link className="text-xl font-medium" href="/login">
				Login
			</Link>
			{session.isLoggedIn && <LogoutForm />}
		</nav>
	);
};

export default Navbar;
