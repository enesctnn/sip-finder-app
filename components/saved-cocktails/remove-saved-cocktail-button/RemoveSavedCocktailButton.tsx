'use client';

import { ModalHandle } from '@/@types/components/modal';
import { RemoveSavedCocktailButtonProps } from '@/@types/components/RemoveSavedCocktailButton';
import { Button } from '@/components/ui/button/button';
import { Modal } from '@/components/ui/modal/modal';
import { useSavedCocktailsSetterContext } from '@/store/saved-cocktails-context/SavedCocktailsContextProvider';
import { useUserContext } from '@/store/user-context/UserContextProvider';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { RiBookmark3Line } from 'react-icons/ri';
import styles from './RemoveSavedCocktailButton.module.scss';

export function RemoveSavedCocktailButton({
  cocktailId,
  cocktailName,
}: RemoveSavedCocktailButtonProps) {
  const user = useUserContext();
  const dialog = useRef<ModalHandle>(null);

  const updateSavedCocktails = useSavedCocktailsSetterContext();

  const { mutate: removeSavedCocktail, isPending } = useMutation({
    mutationFn: () =>
      fetch('/api/cocktails/delete', {
        method: 'POST',
        body: JSON.stringify({ cocktailId, user_email: user?.email }),
      }),
    onSuccess: () => updateSavedCocktails(),
  });

  const actions = (
    <>
      <Button
        type="submit"
        variant="secondary"
        onClick={() => removeSavedCocktail()}
      >
        Confirm Delete {cocktailName}
      </Button>
      <Button type="submit" variant="link">
        Close
      </Button>
    </>
  );

  const handleOpenModal = () => {
    const modal = dialog.current;
    if (modal) {
      modal.open();
    }
  };

  return (
    <>
      <Button
        className={styles['remove-button']}
        onClick={handleOpenModal}
        disabled={isPending}
      >
        {!isPending && (
          <>
            Remove From <RiBookmark3Line size={22} />
          </>
        )}
        {isPending && 'Removing Cocktail...'}
      </Button>
      <Modal
        title="Remove"
        ref={dialog}
        actions={actions}
        portalElementId="confirm-remove-saved-cocktail-modal"
      >
        Are you sure you want to remove the &quot;{cocktailName}&quot; cocktail?
      </Modal>
    </>
  );
}
