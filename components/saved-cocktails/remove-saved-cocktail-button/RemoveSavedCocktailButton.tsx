'use client';

import { ModalHandle } from '@/@types/components/modal';
import { RemoveSavedCocktailButtonProps } from '@/@types/components/RemoveSavedCocktailButton';
import { deleteSavedCocktail } from '@/actions/cocktails';
import { Button } from '@/components/ui/button/button';
import { Modal } from '@/components/ui/modal/modal';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { RiBookmark3Line } from 'react-icons/ri';
import styles from './RemoveSavedCocktailButton.module.scss';

export function RemoveSavedCocktailButton({
  cocktailId,
  cocktailName,
}: RemoveSavedCocktailButtonProps) {
  const dialog = useRef<ModalHandle>(null);

  const actions = (
    <>
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

  const handleCloseModal = () => {
    const modal = dialog.current;
    if (modal) {
      modal.close();
    }
  };

  const [state, formAction] = useFormState(deleteSavedCocktail, '');

  return (
    <>
      <Button className={styles['remove-button']} onClick={handleOpenModal}>
        Remove From <RiBookmark3Line size={22} />
      </Button>
      <Modal
        key={cocktailId}
        title={`Delete ${cocktailName}`}
        ref={dialog}
        actions={actions}
        portalElementId="confirm-remove-saved-cocktail-modal"
      >
        Are you sure you want to remove the &quot;{cocktailName}&quot; cocktail?
        <form
          action={formAction}
          name="delete-cocktail-form"
          id={cocktailId}
          className={styles['delete-form']}
        >
          <input hidden defaultValue={cocktailId} name="cocktailId" />
          <Button type="submit" variant="secondary">
            Confirm Delete {cocktailName}
          </Button>
        </form>
      </Modal>
    </>
  );
}
