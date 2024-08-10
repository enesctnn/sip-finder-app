import { Cocktail } from '@/@types/api/TheCocktailsDbResponseTypes';
import React from 'react';

export const SavedCocktailsContext = React.createContext<Cocktail[]>([]);

export const SavedCocktailsSetterContext = React.createContext<() => void>(
  () => {}
);

export const SavedCocktailsStatusContext = React.createContext<
  'error' | 'idle' | 'pending' | 'success'
>('idle');
