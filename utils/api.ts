import {
  Cocktail,
  SearchCocktailByIdResponseType,
  SearchCocktailsByNameResponseType,
} from '@/@types/api/TheCocktailsDbResponseTypes';
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

export const fetchCocktailById = async (id: string): Promise<Cocktail> => {
  try {
    const res = await axios.get(
      `${endPoints.lookUpFullCocktailDetailsById}${id}`
    );
    return res.data.drinks[0];
  } catch (error) {
    console.error('Error fetching cocktail by ID:', error);
    throw error;
  }
};

export const fetchCocktailsByIds = async (ids: string[]) => {
  try {
    const fetchPromises = ids.map(id => fetchCocktailById(id));
    const cocktails = await Promise.all(fetchPromises);
    return cocktails;
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
  }
};
