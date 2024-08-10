import { LinkButton } from '@/components/ui/link-button/link-button';
import { RiBookmark3Line } from 'react-icons/ri';
import styles from './OpenSavedCocktailsButton.module.scss';

export function OpenSavedCocktailsButton() {
  return (
    <LinkButton
      href="/cocktails/saved"
      className={styles['saved-cocktails-link']}
      variant="link"
    >
      <RiBookmark3Line />
      Saved
    </LinkButton>
  );
}
