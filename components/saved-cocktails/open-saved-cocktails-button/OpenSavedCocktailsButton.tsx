'use client';

import { LinkButton } from '@/components/ui/link-button/link-button';
import { RiBookmark3Line } from 'react-icons/ri';
import styles from './OpenSavedCocktailsButton.module.scss';
import { useUserContext } from '@/store/user-context/UserContextProvider';

export function OpenSavedCocktailsButton() {
  const user = useUserContext();

  return (
    <LinkButton
      href={`/cocktails/saved/${user?.email}`}
      className={styles['saved-cocktails-link']}
      variant="link"
    >
      <RiBookmark3Line />
      Saved
    </LinkButton>
  );
}
