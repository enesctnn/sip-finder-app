
export default function SavedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="confirm-remove-saved-cocktail-modal" />
      {children}
    </>
  );
}
