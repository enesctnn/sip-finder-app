'use client';

import { ModalHandle } from '@/@types/components/modal';
import {
  useBasketContext,
  useBasketSetterContext,
} from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { useRef } from 'react';
import { LiaCocktailSolid } from 'react-icons/lia';
import { Button } from '../ui/button/button';
import { Modal } from '../ui/modal/modal';
import { BasketItem } from './basket-item/BasketItem';
import styles from './CocktailBasket.module.scss';

export function CocktailBasket() {
  const dialog = useRef<ModalHandle>(null);

  const basket = useBasketContext();

  const basketKeys = Object.keys(basket);

  const actions = (
    <>
      {basketKeys.length > 0 && (
        <Button
          type="button"
          variant="link"
          onClick={() => {
            // TODO: save the cocktail id's from basket to saved cocktails
          }}
        >
          Save all cocktails
        </Button>
      )}
      <Button type="submit" variant="error">
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
      <Button
        onClick={handleOpenModal}
        variant="link"
        className={styles['open-basket-button']}
      >
        <LiaCocktailSolid size={28} />
        Basket
        <div className={styles['cocktail-count']}>{basketKeys.length}</div>
      </Button>

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
      </Modal>
    </>
  );
}
