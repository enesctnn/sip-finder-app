import React from 'react';
import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, success, className, ...props }, ref) => (
    <input
      className={`${styles.input} ${error ? styles.error : ''} ${
        success ? styles.success : ''
      } ${className}`}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export { Input };
