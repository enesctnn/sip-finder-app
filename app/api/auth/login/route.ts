'use server';

import { dummyUsers } from '@/utils/dummyUser';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const matchingUser = dummyUsers.find(
      user => user.email === email && user.password === password
    );

    if (!matchingUser) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    cookies().set('auth-token', matchingUser.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(Date.now() + 3600 * 1000),
    });

    return NextResponse.json({ message: 'Login successful!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing login request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
