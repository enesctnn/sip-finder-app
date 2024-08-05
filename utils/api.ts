import { SearchCocktailsByNameResponseType } from '@/@types/api/SearchCocktailsByNameResponseType';
import axios from 'axios';
import { endPoints } from './endPoints';

const BASE_URL = process.env.NEXT_PUBLIC_THE_COCKTAIL_DB_URL;

axios.defaults.baseURL = BASE_URL;

export const fetchCocktailsByName = async (
  searchTerm: string
): Promise<SearchCocktailsByNameResponseType> => {
  const res = await axios.get(endPoints.searchCocktailsByName + searchTerm);
  return res.data;
};
