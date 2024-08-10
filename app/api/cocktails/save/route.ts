import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      cocktailIds,
      user_email,
    }: { cocktailIds: string[]; user_email: string } = await request.json();

    if (
      !Array.isArray(cocktailIds) ||
      typeof user_email !== 'string' ||
      !user_email
    ) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    const prevSavedCocktails = JSON.parse(
      cookies().get('saved-cocktails')?.value || '{}'
    ) as SavedCocktailsType;

    const matchingUserSavedCocktails = prevSavedCocktails[user_email] || [];

    const existingCocktailsSet = new Set(matchingUserSavedCocktails);

    const newCocktails = cocktailIds.filter(
      cocktail => !existingCocktailsSet.has(cocktail)
    );

    const updatedSavedCocktails = {
      ...prevSavedCocktails,
      [user_email]: [...matchingUserSavedCocktails, ...newCocktails],
    };

    cookies().set('saved-cocktails', JSON.stringify(updatedSavedCocktails), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return NextResponse.json(
      { message: 'Cocktails saved successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing save cocktails request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
