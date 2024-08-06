import { Cocktail } from '@/@types/api/SearchCocktailsByNameResponseType';
import { Button } from '@/components/ui/button/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/Card';
import Image from 'next/image';
import { LiaCocktailSolid } from 'react-icons/lia';
import styles from './CocktailCard.module.scss';

export function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  return (
    <Card className={styles['cocktail-card']}>
      <CardHeader className={styles.title}>
        <h2>{cocktail.strDrink}</h2>
      </CardHeader>
      <CardContent>
        <div className={styles['image-container']}>
          <Image
            src={cocktail.strDrinkThumb}
            alt={`glass of ${cocktail.strDrink} photo`}
            fill
            quality={100}
          />
        </div>
      </CardContent>
      <CardFooter className={styles.footer}>
        <menu>
          <Button variant="secondary">
            Add to
            <LiaCocktailSolid size={28} />
          </Button>
        </menu>
        <CardDescription>
          <p style={{ color: 'white', fontWeight: 'bold' }}>Category:</p>
          <p>{cocktail.strCategory}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
