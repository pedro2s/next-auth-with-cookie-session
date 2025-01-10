'use server';
import { getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from '@/lib';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

let username = 'pedro';
let isPro = true;

export const getSession = async () => {
	const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
	return session;
};
export const login = async (prevState: { error: undefined | string }, formData: FormData) => {
	const session = await getSession();

	const formUsername = formData.get('username') as string;
	/* eslint-disable-next-line */
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
export const logout = async () => {
	const session = await getSession();
	session.destroy();
};

export const changePremium = async () => {
	const session = await getSession();

	isPro = !session.isPro;
	session.isPro = !session.isPro;
	await session.save();
	revalidatePath('/profile');
}

export const changeUsername = async (formData: FormData) => {
	const session = await getSession();

	const newUsername = formData.get('username') as string;

	username = newUsername;

	session.username = newUsername;

	await session.save();
	revalidatePath('/profile');
}