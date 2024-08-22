'use server';

import { dummyUsers } from '@/utils/dummyUser';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const token = cookies().get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(null);
    }

    const user = dummyUsers.find(user => user.token === token);

    if (!user) {
      cookies().delete('auth-token');
      return NextResponse.json(
        { message: 'Invalid or expired token!' },
        { status: 401 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
