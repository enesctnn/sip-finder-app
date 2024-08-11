'use client';

import { ModalHandle } from '@/@types/components/modal';
import {
	useBasketCleanerContext,
	useBasketContext,
	useBasketSetterContext,
} from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { useSavedCocktailAdditionContext } from '@/store/saved-cocktails-context/SavedCocktailsContextProvider';
import { useUserContext } from '@/store/user-context/UserContextProvider';
import { postCocktails } from '@/utils/postCocktails';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { Button } from '../ui/button/button';
import { Modal } from '../ui/modal/modal';
import { FeedbackMessage } from '../ui/muation-feedback/feedback-message';
import { BasketItem } from './basket-item/BasketItem';
import styles from './CocktailBasket.module.scss';
import { EmptyBasketFeedback } from './feedback/empty-basket-feedback/EmptyBasketFeedback';
import { OpenBasketButton } from './open-basket-button/OpenBasketButton';

export function CocktailBasket() {
  const dialog = useRef<ModalHandle>(null);

  const basket = useBasketContext();
  const cocktailKeys = Object.keys(basket);

  const user = useUserContext();
  const cleanBasket = useBasketCleanerContext();
  const toggleCocktailBasket = useBasketSetterContext();

  const addCocktails = useSavedCocktailAdditionContext();

  const {
    mutate: saveCocktails,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: () => postCocktails(cocktailKeys, user!.email),
    onSuccess: () => {
      const cocktailsInBasket = cocktailKeys.map(
        cocktailId => basket[cocktailId]
      );
      addCocktails(cocktailsInBasket);
      cleanBasket();
    },
  });

  const actions = (
    <>
      {cocktailKeys.length > 0 && (
        <Button
          type="button"
          variant="secondary"
          onClick={() => saveCocktails()}
          disabled={isPending}
        >
          {isPending ? 'Saving the cocktails...' : 'Save all cocktails'}
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
        )}

        {cocktailKeys.length <= 0 && <EmptyBasketFeedback />}

        {isPending && (
          <FeedbackMessage success={true} message="Clearing your basket..." />
        )}

        {isSuccess && (
          <FeedbackMessage
            success={true}
            message="Cocktails saved successfully!"
          />
        )}

        {isError && (
          <FeedbackMessage
            error
            message="An error occurred while saving cocktails."
          />
        )}
      </Modal>
    </>
  );
}
