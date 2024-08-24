'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  cookies().delete('auth-token');
  try {
    revalidatePath('/', 'layout');
    redirect('/');
  } catch (err) {
    throw err;
  }
}
