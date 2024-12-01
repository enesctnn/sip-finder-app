'use server';

import { LoginFormSchema } from '@/schemas/loginSchema';
import { dummyUsers } from '@/utils/dummyUser';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: { error?: string }, formData: FormData) {
	const formObject = Object.fromEntries(formData);
	const { data, error } = LoginFormSchema.safeParse(formObject);

	if (!data || error) {
		return { error: 'All fields must be filled correctly!' };
	}

	const matchingUser = dummyUsers.find((user) => user.email === data.email && user.password === data.password);

	if (!matchingUser) {
		return { error: 'Invalid credentials' };
	}

	cookies().set('auth-token', matchingUser.token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		expires: new Date(Date.now() + 3600 * 1000)
	});

	try {
		redirect('/cocktails');
	} catch (err) {
		throw err;
	}
}
