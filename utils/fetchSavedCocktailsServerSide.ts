'use server';

import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchCocktailsByIds } from './api';
import { fetchUserServerSide } from './fetchUserServerSide';

export async function fetchSavedCocktailsServerSide() {
  const savedCocktails = JSON.parse(
    cookies().get('saved-cocktails')?.value || '{}'
  ) as SavedCocktailsType;
	
  try {
    const user = await fetchUserServerSide();
    if (!user) redirect('/');

    const matchingUserSavedCocktails = savedCocktails[user.email] || [];

    const cocktails = await fetchCocktailsByIds(matchingUserSavedCocktails);

    return cocktails;
  } catch (error) {
    throw new Error(
      'Error! Something went wrong while fetching saved cocktails.'
    );
  }
}
