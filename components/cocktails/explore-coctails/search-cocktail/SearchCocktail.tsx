'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/input';
import { ChangeEvent } from 'react';
import styles from './SearchCocktail.module.scss';

type SearchCocktailProps = {
  searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchCocktail({ searchTerm, onChange }: SearchCocktailProps) {
  return (
    <Card className={styles.card}>
      <CardHeader>
        <h1>Discover Your Favorite Cocktails</h1>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Search for a Cocktail"
          value={searchTerm}
          onChange={onChange}
        />
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
