'use client';

import { RemoveSavedCocktailButtonProps } from '@/@types/components/RemoveSavedCocktailButton';
import { Button } from '@/components/ui/button/button';
import { useSavedCocktailsSetterContext } from '@/store/saved-cocktails-context/SavedCocktailsContextProvider';
import { useUserContext } from '@/store/user-context/UserContextProvider';
import { useMutation } from '@tanstack/react-query';
import { RiBookmark3Line } from 'react-icons/ri';
import styles from './RemoveSavedCocktailButton.module.scss';

export function RemoveSavedCocktailButton({
  cocktailId,
}: RemoveSavedCocktailButtonProps) {
  const user = useUserContext();
  const updateSavedCocktails = useSavedCocktailsSetterContext();
  const { mutate: removeSavedCocktail, isPending } = useMutation({
    mutationFn: () =>
      fetch('/api/cocktails/delete', {
        method: 'POST',
        body: JSON.stringify({ cocktailId, user_email: user?.email }),
      }),
    onSuccess: () => updateSavedCocktails(),
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
