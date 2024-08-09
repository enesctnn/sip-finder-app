export function saveBasketToLocalStorage(basketKeys: string[]) {
  try {
    if (typeof window !== 'undefined') {
      const existingValue = localStorage.getItem('saved-cocktails');
      let savedCocktails: string[] = [];

      if (existingValue) {
        savedCocktails = JSON.parse(existingValue);
      }

      const updatedCocktails = Array.from(
        new Set([...savedCocktails, ...basketKeys])
      );

      localStorage.setItem('saved-cocktails', JSON.stringify(updatedCocktails));
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}
