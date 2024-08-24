'use client';

import { ModalHandle } from '@/@types/components/modal';
import { saveCocktails } from '@/actions/cocktails';
import {
	useBasketContext,
	useBasketSetterContext,
} from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { Button } from '../ui/button/button';
import { Modal } from '../ui/modal/modal';
import { FeedbackMessage } from '../ui/muation-feedback/feedback-message';
import { BasketItem } from './basket-item/BasketItem';
import styles from './CocktailBasket.module.scss';
import { EmptyBasketFeedback } from './feedback/empty-basket-feedback/EmptyBasketFeedback';
import { OpenBasketButton } from './open-basket-button/OpenBasketButton';
import SaveAllCocktailsButton from './save-all-cocktails-button/SaveAllCocktailsButton';

export function CocktailBasket() {
  const dialog = useRef<ModalHandle>(null);

  const basket = useBasketContext();
  const cocktailKeys = Object.keys(basket);

  const toggleCocktailBasket = useBasketSetterContext();

  const [state, formAction] = useFormState(saveCocktails, '');

  const actions = (
    <>
      <Button type="submit" variant="link">
        Close
      </Button>
      {state.trim().length > 0 && (
        <FeedbackMessage success={true} message={state} />
      )}
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
      <OpenBasketButton
        basketCount={cocktailKeys.length}
        handleOpenModal={handleOpenModal}
      />

      <Modal
        ref={dialog}
        title="Cocktail Basket"
        actions={actions}
        portalElementId="cocktail-basket-modal"
      >
        {cocktailKeys.length > 0 && (
          <>
            <ul className={styles['basket-list']}>
              {cocktailKeys.map(id => {
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
            <form
              name="save-cocktail-form"
              action={formAction}
              className={styles['save-cocktails-form']}
            >
              {cocktailKeys.map(key => (
                <input hidden name={key} key={key} defaultValue={key} />
              ))}
              <SaveAllCocktailsButton />
            </form>
          </>
        )}
        {cocktailKeys.length <= 0 && <EmptyBasketFeedback />}
      </Modal>
    </>
  );
}
