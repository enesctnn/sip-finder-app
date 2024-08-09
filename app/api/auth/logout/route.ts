'use server';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    cookies().delete('auth-token');

    return NextResponse.json(
      { message: 'Logged out successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);

    return NextResponse.json(
      { message: 'Failed to log out.' },
      { status: 500 }
    );
  }
}
