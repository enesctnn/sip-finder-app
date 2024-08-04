'use server';

import { NextRequest, NextResponse } from 'next/server';

export function logout(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/', request.nextUrl));
  response.cookies.delete('auth-token');
  return response;
}
