import { Cocktail } from './api/SearchCocktailsByNameResponseType';

export type CocktailBasketContextType = {
  [key: string]: Cocktail;
};

export type CocktailBasketSetterContextType = (cocktail: Cocktail) => void;
