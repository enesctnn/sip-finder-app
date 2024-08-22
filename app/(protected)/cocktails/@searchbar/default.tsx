import { SearchCocktail } from '@/components/cocktails/search-cocktail/SearchCocktail';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/Card';
import styles from './default.module.scss';

export default function SearchBarPage() {
  return (
    <Card className={styles.card}>
      <CardHeader>
        <h1>Discover Your Favorite Cocktails</h1>
      </CardHeader>
      <CardContent>
        <SearchCocktail />
      </CardContent>
      <CardFooter className={styles.footer}>
        <p>
          Explore our extensive collection of cocktails and find the perfect
          drink for any occasion.
        </p>
        <p>
          Each cocktail is crafted with the finest ingredients and unique
          recipes, ensuring a memorable experience with every sip!
        </p>
      </CardFooter>
    </Card>
  );
}
