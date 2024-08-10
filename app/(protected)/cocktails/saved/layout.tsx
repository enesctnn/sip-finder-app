import { SavedCocktailsContextProvider } from '@/store/saved-cocktails-context/SavedCocktailsContextProvider';

export default function SavedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SavedCocktailsContextProvider>{children}</SavedCocktailsContextProvider>
  );
}
