import { SearchCocktailsByNameResponseType } from '../api/TheCocktailsDbResponseTypes';

export type CocktailsListProps = {
  searchTerm: string;
  initialCocktails: SearchCocktailsByNameResponseType;
};
