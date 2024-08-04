import styles from './layout.module.scss';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>;
}

export default AuthLayout;
