'use server';

import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { User } from '@/@types/User';
import { fetchUserServerSide } from '@/utils/fetchUserServerSide';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function saveCocktails(prevState: string, formData: FormData) {
  const cocktailIds = Array.from(formData.keys());

  const prevSavedCocktails = JSON.parse(
    cookies().get('saved-cocktails')?.value || '{}'
  ) as SavedCocktailsType;

  let user: User | null;

  try {
    user = await fetchUserServerSide();

    if (!user) {
      redirect('/');
    }
  } catch (error) {
    throw new Error('Error! User not found.');
  }

  const user_email = user!.email;

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
}

export async function deleteSavedCocktail(
  prevState: string,
  formData: FormData
) {
  const prevSavedCocktails = JSON.parse(
    cookies().get('saved-cocktails')?.value || '{}'
  ) as SavedCocktailsType;
  let user: User | null;

  try {
    user = await fetchUserServerSide();
    if (!user) redirect('/');
  } catch (error) {
    throw new Error('Error! User not found.');
  }

  const user_email = user!.email;

  const cocktailId = formData.get('cocktailId');
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

  revalidatePath('/saved-cocktails');
  return prevState;
}
