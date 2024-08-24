'use client';

import { Button } from '@/components/ui/button/button';
import { useBasketCleanerContext } from '@/store/cocktail-basket-context/CocktailBasketContextProvider';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';

export default function SaveAllCocktailsButton() {
  const { pending } = useFormStatus();
  const clearBasket = useBasketCleanerContext();

  useEffect(() => {
    if (pending) clearBasket();
  }, [pending, clearBasket]);

  return (
    <Button variant="secondary">
      {pending ? 'Saving cocktails...' : 'Save all cocktails'}
    </Button>
  );
}
