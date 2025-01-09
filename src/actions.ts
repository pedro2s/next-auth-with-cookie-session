'use server';
import { getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from '@/lib';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

let username = 'Pedro';
let isPro = true;

export const getSession = async () => {
	const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
	return session;
};
export const login = async (formData: FormData) => {
	const session = await getSession();

	const formUsername = formData.get('username') as string;
	const formPassword = formData.get('password') as string;

	// CHECK USER IN DB

	if (formUsername !== username) {
		return { error: 'Wrong credentials!' };
	}

	session.userId = 'id';
	session.username = formUsername;
	session.isPro = isPro;
	session.isLoggedIn = true;

	await session.save();
	redirect('/');
};
export const logout = async () => {};
