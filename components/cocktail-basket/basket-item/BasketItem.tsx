import { BasketItemProps } from '@/@types/components/BasketItem';
import { Button } from '@/components/ui/button/button';
import Image from 'next/image';
import { BiTrash } from 'react-icons/bi';
import styles from './BasketItem.module.scss';

export function BasketItem({
  strDrink,
  strAlcoholic,
  strDrinkThumb,
  strGlass,
  onRemove,
}: BasketItemProps) {
  return (
    <li className={styles.basketItem}>
      <div className={styles.imageContainer}>
        <Image
          src={strDrinkThumb}
          alt={`a glass of ${strDrink} image`}
          fill
          className={styles.image}
        />
      </div>
      <article className={styles['cocktail-info']}>
        <header>
          <h2 className={styles.label}>Cocktail</h2>
          <h2 className={styles.drinkName}> {strDrink}</h2>
        </header>
        <section className={styles.details}>
          <h4 className={styles.label}>Alcoholic</h4>
          <p className={styles.value}>{strAlcoholic}</p>
        </section>
        <section className={styles.details}>
          <h4 className={styles.label}>Glass</h4>
          <p className={styles.value}>{strGlass}</p>
        </section>
      </article>
      <Button variant="link" onClick={onRemove}>
        <BiTrash size={24} />
      </Button>
    </li>
  );
}
