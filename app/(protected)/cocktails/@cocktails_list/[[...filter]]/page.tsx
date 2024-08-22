import { CocktailsList } from '@/components/cocktails/cocktails-list/CocktailsList';

export default function CocktailsListPage({
  params: { filter },
}: {
  params: { filter?: string };
}) {
  return <CocktailsList filter={filter || ''} />;
}
