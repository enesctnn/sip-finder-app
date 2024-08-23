'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  try {
    cookies().delete('auth-token');
    revalidatePath('/', 'layout');
    redirect('/');
  } catch (err) {
    throw err;
  }
}
