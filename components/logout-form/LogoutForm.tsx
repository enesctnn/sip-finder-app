import { logout } from '@/actions/logout';
import { LogoutButton } from '../logout-button/LogoutButton';

export function LogoutForm() {
  return (
    <form name="logout-form" action={logout}>
      <LogoutButton />
    </form>
  );
}
