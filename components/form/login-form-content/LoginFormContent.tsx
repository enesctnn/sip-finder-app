'use client';

import { Button } from '@/components/ui/button/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/input';
import { LoginFormSchema, LoginFormSchemaT } from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStatus } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import { FcUnlock } from 'react-icons/fc';
import { FormError } from '../form-error/FormError';
import { FormMessage } from '../form-message/FormMessage';
import styles from './LoginFormContent.module.scss';

const defaultValues = {
  email: 'info@cocktails.com',
  password: '123456aA@',
};

export function LoginFormContent({ error }: { error: string | undefined }) {
  const { pending } = useFormStatus();

  const {
    formState: { errors, isValid },
    control,
  } = useForm<LoginFormSchemaT>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });
  return (
    <Card className={styles.card}>
      <CardHeader>
        <h1 className={styles.title}>
          Login <FcUnlock />
        </h1>
      </CardHeader>

      <CardContent>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                disabled={pending}
                error={!!errors.email || !!error}
                placeholder="Email"
                type="email"
                autoFocus
              />
            )}
          />
          <FormMessage message={errors.email?.message} />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                disabled={pending}
                error={!!errors.password || !!error}
                placeholder="******"
                type="password"
              />
            )}
          />
          <FormMessage message={errors.password?.message} />
        </div>
      </CardContent>

      <CardFooter>
        <menu className={styles.menu}>
          {error && <FormError message={error} />}
          <Button type="submit" variant="link" disabled={pending || !isValid}>
            {pending ? 'Loging in...' : 'Login'}
          </Button>
        </menu>
      </CardFooter>
    </Card>
  );
}
