import { Cocktail } from '@/@types/api/TheCocktailsDbResponseTypes';
import React from 'react';

export const SavedCocktailsContext = React.createContext<Cocktail[]>([]);

export const SavedCocktailsRevalidateContext = React.createContext<() => void>(
  () => {}
);

export const SavedCocktailRemovalContext = React.createContext<
  (cocktailId: string) => void
>(() => {});

export const SavedCocktailAdditionContext = React.createContext<
  (cocktail: Cocktail[]) => void
>(() => {});

export const SavedCocktailsStatusContext = React.createContext<
  'error' | 'idle' | 'pending' | 'success'
>('idle');
