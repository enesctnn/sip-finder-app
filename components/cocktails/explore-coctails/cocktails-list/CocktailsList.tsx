import { Cocktail } from '@/@types/api/SearchCocktailsByNameResponseType';
import { CocktailCard } from '../../cocktail-card/CocktailCard';
import styles from './CocktailsList.module.scss';

export function CocktailsList({ cocktails }: { cocktails: Cocktail[] }) {
  return (
    <section className={styles['cocktails']}>
      <ul>
        {cocktails.slice(0, 12).map(cocktail => (
          <li key={cocktail.idDrink}>
            <CocktailCard cocktail={cocktail} />
          </li>
        ))}
      </ul>
    </section>
  );
}
