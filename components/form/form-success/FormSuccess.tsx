import { FaCheckCircle } from 'react-icons/fa';
import styles from './FormSuccess.module.scss';

type FormSuccessProps = {
  message?: string;
};

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;
  return (
    <div className={styles.formSuccess}>
      <FaCheckCircle className={styles.icon} />
      <p>{message}</p>
    </div>
  );
}
