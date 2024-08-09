import { Cocktail } from './api/TheCocktailsDbResponseTypes';

export type CocktailBasketContextType = {
  [key: string]: Cocktail;
};

export type CocktailBasketSetterContextType = (cocktail: Cocktail) => void;

export type CocktailBasketCleanerContextType = () => void;
