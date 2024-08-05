import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);
