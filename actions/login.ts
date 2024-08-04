'use server';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { NextRequest, NextResponse } from 'next/server';

export function login(request: NextRequest) {
  const token = 'DUMMY_USER_TOKEN_1';
  if (!token) {
    return;
  }

  const response = NextResponse.redirect(
    new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl)
  );

  response.cookies.set('auth-token', token, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 3600 * 1000),
  });

  return response;
}
