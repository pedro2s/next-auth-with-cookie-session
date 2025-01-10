import { changePremium, changeUsername, getSession } from '@/actions';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
	const session = await getSession();

	if (!session.isLoggedIn) {
		redirect('/');
	}

	return <div>
		<h1 className='text-3xl'>Welcome to Profile Page</h1>
		<p className='mt-4'>Welcome, <b>{session.username}</b></p>
		<span>You are a <b>{session.isPro ? 'Premium' : 'Free'}</b> user</span>
		<form action={changePremium} className='my-4'>
			<button className='bg-emerald-700 px-4 py-3 rounded-lg text-md uppercase font-semibold'>
				{session.isPro ? 'Downgrade' : 'Upgrade'}
			</button>
		</form>

		<form action={changeUsername} className='flex gap-2'>
			<input type="text" name='username' required placeholder={session.username} className='px-4 py-3 rounded-md text-zinc-600 outline-none' />
			<button className='bg-emerald-700 px-4 py-3 rounded-lg text-md uppercase font-semibold'>Update</button>
		</form>
	</div>;
};

export default page;
