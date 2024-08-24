'use server';

import { dummyUsers } from '@/utils/dummyUser';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(
  prevState: { errors: string[] },
  formData: FormData
) {
  const { email, password } = Object.fromEntries(formData);
  const errors: string[] = [];

  if (!email || !password) {
    errors.push('All fields must be filled correctly!');
  }

  const matchingUser = dummyUsers.find(
    user => user.email === email && user.password === password
  );

  if (!matchingUser) {
    errors.push('Invalid credentials');
  }

  if (errors.length > 0) {
    return { errors };
  }

  cookies().set('auth-token', matchingUser!.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + 3600 * 1000),
  });
	
  try {
    revalidatePath('/', 'layout');
    redirect('/cocktails');
  } catch (err) {
    throw err;
  }
}
