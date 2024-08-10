import { SavedCocktailsListItemProps } from '@/@types/components/SavedCocktailsListItem';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/Card';
import Image from 'next/image';
import { RemoveSavedCocktailButton } from '../remove-saved-cocktail-button/RemoveSavedCocktailButton';
import styles from './SavedCocktailsListItem.module.scss';

export function SavedCocktailsListItem({
  cocktail,
}: SavedCocktailsListItemProps) {
  return (
    <li className={styles['saved-cocktail']}>
      <Image
        src={cocktail.strDrinkThumb}
        alt={`a glass of ${cocktail.strDrink} image`}
        width={300}
        height={300}
      />
      <Card className={styles['cocktail-details-card']}>
        <CardHeader>
          <h1>{cocktail.strDrink}</h1>
        </CardHeader>
        <CardContent>
          <article className={styles['cocktail-article']}>
            <section>
              <h3>Ingredients: </h3>
              <p className={styles.ingredents}>
                {cocktail.strIngredient1}
                {'	'}
                {cocktail?.strIngredient2}
                {'	'}
                {cocktail?.strIngredient3}
                {'	'}
                {cocktail?.strIngredient4}
                {'	'}
                {cocktail?.strIngredient5}
                {'	'}
                {cocktail?.strIngredient6}
                {'	'}
                {cocktail?.strIngredient7}
                {'	'}
                {cocktail?.strIngredient8}
                {'	'}
                {cocktail?.strIngredient9}
                {'	'}
                {cocktail?.strIngredient10}
                {'	'}
                {cocktail?.strIngredient11}
                {'	'}
                {cocktail?.strIngredient12}
                {'	'}
                {cocktail?.strIngredient13}
                {'	'}
                {cocktail?.strIngredient14}
                {'	'}
                {cocktail?.strIngredient15}
              </p>
            </section>
            <section>
              <h3>Instructions: </h3>
              <p>{cocktail?.strInstructions || 'No instructions found.'}</p>
            </section>
            <article className={styles['cocktail-category-article']}>
              <section>
                <h4>Category:</h4>
                <p>{cocktail.strCategory}</p>
              </section>
              <section>
                <h4>Alcoholic:</h4>
                <p>{cocktail.strAlcoholic}</p>
              </section>
              <section>
                <h4>Glass:</h4>
                <p>{cocktail.strGlass}</p>
              </section>
            </article>
          </article>
        </CardContent>
        <CardFooter className={styles.footer}>
          <RemoveSavedCocktailButton cocktailId={cocktail.idDrink} />
        </CardFooter>
      </Card>
    </li>
  );
}
