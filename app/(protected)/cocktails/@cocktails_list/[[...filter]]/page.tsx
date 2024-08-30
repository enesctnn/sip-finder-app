import { CocktailStatus } from '@/components/cocktails/cocktails-list/cocktail-status/CocktailStatus';
import { CocktailsList } from '@/components/cocktails/cocktails-list/CocktailsList';
import cocktailGif from '@/public/assets/pouring-cocktail.gif';
import { Suspense } from 'react';
import styles from './page.module.scss';

export default function CocktailsListPage({
  params: { filter },
}: {
  params: { filter?: string };
}) {
  return (
    <Suspense
      fallback={
        <CocktailStatus
          title="Cocktails Loading . . ."
          className={styles.pulse}
          src={cocktailGif}
          alt="pouring wiskey gif."
        />
      }
    >
      <CocktailsList filter={decodeURI(filter || '')} />
    </Suspense>
  );
}
