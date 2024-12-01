import { Cocktail, SearchCocktailsByNameResponseType } from '@/@types/api/TheCocktailsDbResponseTypes';
import { createUrlSearchParams } from '@/utils/urlParams';
import { CocktailsDBEndpoint } from './endPoints';

const BASE_URL = process.env.NEXT_PUBLIC_THE_COCKTAIL_DB_URL;

if (!BASE_URL) {
	throw new Error('The cocktail DB URL is not defined in .env file');
}

export const fetchCocktailsByName = async (searchTerm: string): Promise<SearchCocktailsByNameResponseType> => {
	try {
		const params = createUrlSearchParams({ s: searchTerm });
		const res = await fetch(`${BASE_URL}${CocktailsDBEndpoint.SearchCocktails}?${params}`);
		return await res.json();
	} catch (error) {
		console.error('Error fetching cocktails by name:', error);
		throw new Error('Failed to fetch cocktails by name');
	}
};

export const fetchCocktailById = async (id: string): Promise<Cocktail> => {
	try {
		const params = createUrlSearchParams({ i: id });
		const res = await fetch(`${BASE_URL}${CocktailsDBEndpoint.CocktailDetails}?${params}`);
		const data = await res.json();
		return data.drinks[0];
	} catch (error) {
		console.error('Error fetching cocktail by ID:', error);
		throw new Error('Failed to fetch cocktail by ID');
	}
};

export const fetchCocktailsByIds = async (ids: string[]): Promise<Cocktail[]> => {
	try {
		const fetchPromises = ids.map((id) => fetchCocktailById(id));
		const cocktails = await Promise.all(fetchPromises);
		return cocktails;
	} catch (error) {
		console.error('Error fetching cocktails by IDs:', error);
		return [];
	}
};
