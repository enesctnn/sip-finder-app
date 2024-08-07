'use client';

import { ModalHandle } from '@/@types/components/modal';
import { Button } from '@/components/ui/button/button';
import { Modal } from '@/components/ui/modal/modal';
import { useRef } from 'react';
import { LiaCocktailSolid } from 'react-icons/lia';
import styles from './AddToCocktailBasketButton.module.scss';
import { AddToCocktailBasketButtonProps } from '@/@types/components/AddToCocktailBasketButton';

export function AddToCocktailBasketButton({
  cocktail,
}: AddToCocktailBasketButtonProps) {
  const dialog = useRef<ModalHandle>(null);

  const actions = (
    <>
      <Button
        onClick={() => {
          // TODOS: Add cocktail to the cocktail basket
        }}
        type="submit"
        variant="link"
        className={styles.confirm}
      >
        Confirm
      </Button>
      <Button type="submit" variant="error">
        Cancel
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
        className={styles['add-to-cocktail-basket-button']}
        variant="secondary"
        onClick={handleOpenModal}
      >
        Add to
        <LiaCocktailSolid size={28} />
      </Button>
      <Modal
        ref={dialog}
        title="Add to Cocktail Basket"
        description={`Are you sure you want to add ${cocktail.strDrink} to basket?`}
        actions={actions}
      />
    </>
  );
}
