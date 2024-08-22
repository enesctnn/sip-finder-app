export default function CocktailsLayout({
  cocktails_list,
  searchbar,
}: {
  cocktails_list: React.ReactNode;
  searchbar: React.ReactNode;
}) {
  return (
    <>
      {searchbar}
      {cocktails_list}
    </>
  );
}
