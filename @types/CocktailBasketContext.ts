import { Cocktail } from './api/TheCocktailsDbResponseTypes';

export type CocktailBasketContextType = Record<string, Cocktail>;

export type CocktailBasketSetterContextType = (cocktail: Cocktail) => void;

export type CocktailBasketCleanerContextType = () => void;
