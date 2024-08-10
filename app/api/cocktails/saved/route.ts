import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { fetchCocktailsByIds } from '@/utils/api';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { user_email } = await request.json();
    if (!user_email || typeof user_email !== 'string') {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const savedCocktails = JSON.parse(
      cookies().get('saved-cocktails')?.value || '{}'
    ) as SavedCocktailsType;

    const matchingUserSavedCocktails = savedCocktails[user_email] || [];

    const cocktails = await fetchCocktailsByIds(matchingUserSavedCocktails);

    return NextResponse.json(cocktails);
  } catch (error) {
    console.error('Error processing saved cocktails request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
