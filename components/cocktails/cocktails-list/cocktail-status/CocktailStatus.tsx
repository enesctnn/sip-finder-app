import { CocktailStatusProps } from '@/@types/components/CocktailStatus';
import Image from 'next/image';
import styles from './CocktailStatus.module.scss';

export function CocktailStatus({
  title,
  src,
  alt,
  className,
}: CocktailStatusProps) {
  return (
    <div className={`${styles['status-container']} ${className}`}>
      <h2>{title}</h2>
      <Image
        className={styles['status-image']}
        src={src}
        alt={alt}
        unoptimized
      />
    </div>
  );
}
