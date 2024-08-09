'use server';

import { SavedCocktailsType } from '@/@types/SavedCocktails';
import { CocktailCard } from '@/components/cocktails/cocktail-card/CocktailCard';
import { fetchCocktailsByIds } from '@/utils/api';
import { dummyUsers } from '@/utils/dummyUser';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import { SavedCocktailsList } from '@/components/saved-cocktails/SavedCocktailsList';
import { SavedCocktailsListItem } from '@/components/saved-cocktails/saved-cocktails-list-item/SavedCocktailsListItem';

interface SavedCocktailsPageProps {
  params: {
    email: string;
  };
}

async function SavedCocktailsPage({ params }: SavedCocktailsPageProps) {
  const { email } = params;
  const decodedEmail = decodeURIComponent(email);
  const matchingUser = dummyUsers.find(user => user.email === decodedEmail);

  if (!email || !matchingUser) {
    notFound();
  }

  const savedCocktails = JSON.parse(
    cookies().get('saved-cocktails')?.value || '{}'
  ) as SavedCocktailsType;

  const matchingUserSavedCocktails = savedCocktails[matchingUser.email] || [];

  const cocktails = await fetchCocktailsByIds(matchingUserSavedCocktails);

  return (
    <div className={styles['container']}>
      {cocktails.length > 0 && (
        <SavedCocktailsList>
          {cocktails.map(cocktail => (
            <SavedCocktailsListItem
              key={cocktail.idDrink}
              cocktail={cocktail}
            />
          ))}
        </SavedCocktailsList>
      )}
      {cocktails.length <= 0 && (
        <div className={styles['no-cocktails-found']}>
          <section>
            <h2>No saved cocktails found.</h2>
            <p>
              If you have your cocktails in basket you can save it from there.
              If not you can save the cocktails from cocktails page.
            </p>
          </section>
          <Image
            src="/assets/crossing-arms.jpg"
            alt="waiter crossing arms"
            width={1920}
            height={1280}
          />
        </div>
      )}
    </div>
  );
}

export default SavedCocktailsPage;
