import {
  CocktailBasketContextType,
  CocktailBasketSetterContextType,
} from '@/@types/CocktailBasket';
import React from 'react';

export const CocktailBasketContext =
  React.createContext<CocktailBasketContextType>({});

export const CocktailBasketSetterContext =
  React.createContext<CocktailBasketSetterContextType>(() => {});
