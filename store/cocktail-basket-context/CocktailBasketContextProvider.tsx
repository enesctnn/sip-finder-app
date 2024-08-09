'use client';

import { Cocktail } from '@/@types/api/TheCocktailsDbResponseTypes';
import { CocktailBasketContextType } from '@/@types/CocktailBasketContext';
import { useContext, useState } from 'react';
import {
  CocktailBasketCleanerContext,
  CocktailBasketContext,
  CocktailBasketSetterContext,
} from './cocktailBasketContext';

export function CocktailBasketContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cocktailBasket, setCocktailBasket] =
    useState<CocktailBasketContextType>({});

  const handleToggleCocktailBasket = (cocktail: Cocktail) => {
    setCocktailBasket(prevState => {
      const newState = { ...prevState };

      if (newState[cocktail.idDrink]) {
        delete newState[cocktail.idDrink];
      } else {
        newState[cocktail.idDrink] = { ...cocktail };
      }

      return newState;
    });
  };

  const handleCleanBasket = () => setCocktailBasket({});

  return (
    <CocktailBasketContext.Provider value={cocktailBasket}>
      <CocktailBasketSetterContext.Provider value={handleToggleCocktailBasket}>
        <CocktailBasketCleanerContext.Provider value={handleCleanBasket}>
          {children}
        </CocktailBasketCleanerContext.Provider>
      </CocktailBasketSetterContext.Provider>
    </CocktailBasketContext.Provider>
  );
}

export function useBasketContext(): CocktailBasketContextType {
  const context = useContext(CocktailBasketContext);
  if (context === undefined) {
    throw new Error(
      'useBasketContext must be used within a CocktailBasketContextProvider'
    );
  }
  return context;
}

export function useBasketSetterContext(): (cocktail: Cocktail) => void {
  const context = useContext(CocktailBasketSetterContext);
  if (context === undefined) {
    throw new Error(
      'useBasketSetterContext must be used within a CocktailBasketContextProvider'
    );
  }
  return context;
}
export function useBasketCleanerContext(): () => void {
  const context = useContext(CocktailBasketCleanerContext);
  if (context === undefined) {
    throw new Error(
      'useBasketCleanerContext must be used within a CocktailBasketCleanerContextProvider'
    );
  }
  return context;
}
