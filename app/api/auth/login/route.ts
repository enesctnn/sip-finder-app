'use server';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { dummyUsers } from '@/utils/dummyUser';
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

    const response = NextResponse.redirect(
      new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl)
    );

    response.cookies.set('auth-token', matchingUser.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(Date.now() + 3600 * 1000),
    });

    return await response;
  } catch (error) {
    console.error('Error processing login request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
