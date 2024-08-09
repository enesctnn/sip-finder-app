const searchCocktailsEndPoint = 'search.php?';
const cocktailDetailsEndPoint = 'lookup.php?';
const filteredSearchEndPoint = 'filter.php?';
const filteredListEndPoint = 'list.php?';

export const endPoints = {
  searchCocktailsByName: searchCocktailsEndPoint + 's=',
  listAllCocktailsByFirstLetter: searchCocktailsEndPoint + 'f=',
  searchIngredientByName: searchCocktailsEndPoint + 'i=',
  lookUpFullCocktailDetailsById: cocktailDetailsEndPoint + 'i=',
  lookUpIngredientById: cocktailDetailsEndPoint + 'iid=',
  lookUpARandomCocktail: 'random.php',
  searchByIngredient: filteredSearchEndPoint + 'i=',
  filterByAlcoholic: filteredSearchEndPoint + 'a=',
  filterByCategory: filteredSearchEndPoint + 'c=',
  filterByGlass: filteredSearchEndPoint + 'g=',
  categoriesList: filteredListEndPoint + 'c=',
  glassesList: filteredListEndPoint + 'g=',
  ingredientsList: filteredListEndPoint + 'i=',
  alcoholicsList: filteredListEndPoint + 'a=',
};
