import { Provider } from '@/utils/Providers';
import styles from './layout.module.scss';
import { Header } from '@/components/header/Header';

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <div className={styles.layout}>
        <Header />
        {children}
      </div>
    </Provider>
  );
}

export default ProtectedLayout;
