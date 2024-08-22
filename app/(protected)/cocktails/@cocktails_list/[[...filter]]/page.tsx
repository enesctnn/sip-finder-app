import { CocktailStatus } from '@/components/cocktails/cocktails-list/cocktail-status/CocktailStatus';
import { CocktailsList } from '@/components/cocktails/cocktails-list/CocktailsList';
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
          src="/assets/pouring-cocktail.gif"
          alt="pouring wiskey gif."
          className={styles.pulse}
        />
      }
    >
      <CocktailsList filter={filter || ''} />
    </Suspense>
  );
}
