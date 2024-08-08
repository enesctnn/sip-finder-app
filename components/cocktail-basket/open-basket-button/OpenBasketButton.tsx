'use client';

import { Button } from '@/components/ui/button/button';
import { useEffect, useState } from 'react';
import { LiaCocktailSolid } from 'react-icons/lia';
import styles from './OpenBasketButton.module.scss';

export function OpenBasketButton({
  handleOpenModal,
  basketCount,
}: {
  handleOpenModal: () => void;
  basketCount: number;
}) {
  const [animation, setAnimation] = useState<string | null>(null);

  useEffect(() => {
    setAnimation(styles['bump-animation']);
    const timer = setTimeout(() => {
      setAnimation(null);
    }, 300);
    return () => clearTimeout(timer);
  }, [basketCount]);

  return (
    <Button
      onClick={handleOpenModal}
      variant="link"
      className={`${styles['open-basket-button']} ${animation}`}
    >
      <LiaCocktailSolid size={28} />
      Basket
      <div className={styles['cocktail-count']}>{basketCount}</div>
    </Button>
  );
}
