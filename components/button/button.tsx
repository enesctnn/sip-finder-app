import { ButtonProps } from '@/@types/components/button';
import Link from 'next/link';
import styles from './button.module.scss';

export function Button({ href, children }: ButtonProps) {
  if (href)
    return (
      <Link className={styles.button} href={href}>
        {children}
      </Link>
    );

  return <button className={styles.button}>{children}</button>;
}
