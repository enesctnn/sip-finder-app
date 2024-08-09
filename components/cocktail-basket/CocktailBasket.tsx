'use client';

import { ModalHandle } from '@/@types/components/modal';
import {
  useBasketContext,
  useBasketSetterContext,
} from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { useRef } from 'react';
import { Button } from '../ui/button/button';
import { Modal } from '../ui/modal/modal';
import { BasketItem } from './basket-item/BasketItem';
import styles from './CocktailBasket.module.scss';
import { OpenBasketButton } from './open-basket-button/OpenBasketButton';
import { saveBasketToLocalStorage } from '@/utils/setBasketLocalStorage';

export function CocktailBasket() {
  const dialog = useRef<ModalHandle>(null);

  const basket = useBasketContext();

  const basketKeys = Object.keys(basket);

  const actions = (
    <>
      {basketKeys.length > 0 && (
        <Button
          type="button"
          variant="secondary"
          onClick={() => saveBasketToLocalStorage(basketKeys)}
        >
          Save all cocktails
        </Button>
      )}
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

  const toggleCocktailBasket = useBasketSetterContext();

  return (
    <>
      <OpenBasketButton
        basketCount={basketKeys.length}
        handleOpenModal={handleOpenModal}
      />

      <Modal
        ref={dialog}
        title="Cocktail Basket"
        actions={actions}
        portalElementId="cocktail-basket-modal"
      >
        {basketKeys.length > 0 && (
          <ul className={styles['basket-list']}>
            {basketKeys.map(id => {
              const cocktail = basket[id];

              return (
                <BasketItem
                  key={cocktail.idDrink}
                  strAlcoholic={cocktail.strAlcoholic}
                  strDrink={cocktail.strDrink}
                  strGlass={cocktail.strGlass}
                  strDrinkThumb={cocktail.strDrinkThumb}
                  onRemove={() => toggleCocktailBasket(cocktail)}
                />
              );
            })}
          </ul>
        )}
        {basketKeys.length <= 0 && (
          <>
            <h2 className={styles['empty-basket-title']}>
              Your basket is empty.
            </h2>
            <p>
              You can fill your basket with the cocktails you want and store
              them for later.
            </p>
          </>
        )}
      </Modal>
    </>
  );
}
