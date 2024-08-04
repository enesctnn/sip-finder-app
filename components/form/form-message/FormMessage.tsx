import styles from './FormMessage.module.scss';

export const FormMessage = ({ message }: { message: string | undefined }) => (
  <div className={styles.formMessage}>{message}</div>
);
