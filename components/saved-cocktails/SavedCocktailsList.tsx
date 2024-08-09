import styles from './SavedCocktailsList.module.scss';

export function SavedCocktailsList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className={styles['saved-cocktails-list']}>{children}</ul>;
}
