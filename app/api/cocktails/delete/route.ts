import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      cocktailId,
      user_email,
    }: { cocktailId: string; user_email: string } = await request.json();

    if (
      typeof cocktailId !== 'string' ||
      !cocktailId ||
      typeof user_email !== 'string' ||
      !user_email
    ) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    const prevSavedCocktails = JSON.parse(
      cookies().get('saved-cocktails')?.value || '{}'
    ) as SavedCocktailsType;

    const matchingUserSavedCocktails = prevSavedCocktails[user_email] || [];
    const updatedCocktails = matchingUserSavedCocktails.filter(
      id => id !== cocktailId
    );

    const updatedSavedCocktails = {
      ...prevSavedCocktails,
      [user_email]: updatedCocktails,
    };

    cookies().set('saved-cocktails', JSON.stringify(updatedSavedCocktails), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return NextResponse.json(
      { message: 'Cocktail removed successfully!' },
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
