import { ExploreCocktails } from '@/components/cocktails/explore-cocktails/ExploreCocktails';
import { fetchCocktailsByName } from '@/utils/api';

export default async function CocktailsPage() {
  const initialCocktails = await fetchCocktailsByName('');

  return <ExploreCocktails initialCocktails={initialCocktails} />;
}
