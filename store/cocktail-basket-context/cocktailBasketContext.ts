import {
  CocktailBasketContextType,
  CocktailBasketSetterContextType,
} from '@/@types/CocktailBasketContext';
import React from 'react';

export const CocktailBasketContext =
  React.createContext<CocktailBasketContextType>({});

export const CocktailBasketSetterContext =
  React.createContext<CocktailBasketSetterContextType>(() => {});
