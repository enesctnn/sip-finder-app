'use client';

import { Button } from '@/components/ui/button/button';
import { useUserContext } from '@/store/user-context/UserContextProvider';
import { useMutation } from '@tanstack/react-query';
import { RiBookmark3Line } from 'react-icons/ri';
import styles from './RemoveSavedCocktailButton.module.scss';

export function RemoveSavedCocktailButton({
  cocktailId,
}: {
  cocktailId: string;
}) {
  const user = useUserContext();

  const { mutate: removeSavedCocktail, isPending } = useMutation({
    mutationFn: () =>
      fetch('/api/cocktails/delete', {
        method: 'POST',
        body: JSON.stringify({ cocktailId, user_email: user?.email }),
      }),
  });

  return (
    <Button
      className={styles['remove-button']}
      onClick={() => removeSavedCocktail()}
    >
      {!isPending && (
        <>
          Remove From <RiBookmark3Line size={22} />
        </>
      )}
      {isPending && 'Removing Cocktail...'}
    </Button>
  );
}
