'use server';

import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { fetchUserServerSide } from '@/utils/fetchUserServerSide';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function saveCocktails(prevState: string, formData: FormData) {
  const cocktailIds = Array.from(formData.keys());

  try {
    const user = await fetchUserServerSide();

    if (!user) {
      redirect('/');
    }

    const user_email = user.email;

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

    revalidatePath('/saved-cocktails');
    return 'Cocktails saved successfully!';
  } catch (err) {
    throw err;
  }
}