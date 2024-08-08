'use server';

import { NextRequest, NextResponse } from 'next/server';
import { dummyUsers } from '@/utils/dummyUser';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const user = dummyUsers.find(user => user.token === token);

    if (!user) {
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
