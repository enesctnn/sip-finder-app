import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type CocktailStatusProps = {
  title: string;
  src: StaticImport;
  alt: string;
  className?: string;
};
