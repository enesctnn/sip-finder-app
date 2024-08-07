'use client';

import { Cocktail } from '@/@types/api/SearchCocktailsByNameResponseType';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/Card';
import Image from 'next/image';
import styles from './CocktailCard.module.scss';
import { AddToCocktailBasketButton } from './add-to-cocktail-basket-button/AddToCocktailBasketButton';

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
          <AddToCocktailBasketButton cocktail={cocktail} />
        </menu>
        <div>
          <h3>Category:</h3>
          <p>{cocktail.strCategory}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
