'use client';

import { AddToCocktailBasketButtonProps } from '@/@types/components/AddToCocktailBasketButton';
import { ModalHandle } from '@/@types/components/modal';
import { Button } from '@/components/ui/button/button';
import { Modal } from '@/components/ui/modal/modal';
import {
  useBasketContext,
  useBasketSetterContext,
} from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { useRef } from 'react';
import { LiaCocktailSolid } from 'react-icons/lia';
import styles from './AddToCocktailBasketButton.module.scss';

export function AddToCocktailBasketButton({
  cocktail,
}: AddToCocktailBasketButtonProps) {
  const dialog = useRef<ModalHandle>(null);

  const cocktailBasket = useBasketContext();
  const toggleCocktailBasket = useBasketSetterContext();

  const actions = (
    <>
      <Button
        onClick={() => toggleCocktailBasket(cocktail)}
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

  const inTheBasket = !!cocktailBasket[cocktail.idDrink];

  return (
    <>
      <Button
        className={styles['add-to-cocktail-basket-button']}
        variant="secondary"
        onClick={handleOpenModal}
        disabled={inTheBasket}
      >
        {!inTheBasket && (
          <>
            Add to
            <LiaCocktailSolid size={28} />
          </>
        )}
        {inTheBasket && 'In the basket'}
      </Button>

      <Modal
        portalElementId="confirm-modal"
        ref={dialog}
        title="Add to Cocktail Basket"
        actions={actions}
      >
        Are you sure you want to add {cocktail.strDrink} to basket?
      </Modal>
    </>
  );
}
