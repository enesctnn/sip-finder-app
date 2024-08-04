import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './FormError.module.scss';

type FormErrorProps = {
  message?: string;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className={styles.formError}>
      <FaExclamationTriangle className={styles.icon} />
      <p>{message}</p>
    </div>
  );
}
