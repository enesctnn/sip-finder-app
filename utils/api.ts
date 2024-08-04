export const BASE_URL = process.env.NEXT_PUBLIC_THE_COCKTAIL_DB_URL;

export const fetchCocktails = async (searchTerm: string) => {
  const response = await fetch(`${BASE_URL}search.php?s=${searchTerm}`, {
    next: {
      tags: ['search_cocktails', searchTerm],
    },
  });
  const data = await response.json();
  return data;
};
