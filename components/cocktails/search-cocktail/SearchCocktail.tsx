'use client';

import { Input } from '@/components/ui/input/input';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export function SearchCocktail() {
  const [cocktail, setCocktail] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCocktail(e.currentTarget.value);
    router.push(`/cocktails/${e.currentTarget.value}`);
  };

  return (
    <Input
      placeholder="Search for a Cocktail"
      id="search-cocktail"
      name="cocktail"
      value={cocktail}
      onChange={handleChange}
    />
  );
}
