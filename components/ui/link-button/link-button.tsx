import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';
import styles from './link-button.module.scss';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'ghost';
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  className,
  ...props
}) => (
  <Link
    className={`${styles.button} ${styles[variant]} ${className}`}
    {...props}
  />
);
