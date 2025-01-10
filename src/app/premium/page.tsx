import { getSession } from '@/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
	const session = await getSession();

	if (!session.isLoggedIn) {
		redirect('/');
	}

	if (!session.isPro) {
		return (
			<div>
				<h1 className='text-3xl'>Only premium users can see the content!</h1>
				<Link href="/profile">Go to profile page to upgrade to premium</Link>
			</div>
		)
	}

	return <div>Premium Page</div>;
};

export default page;
