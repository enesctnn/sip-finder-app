'use client';

import { Button } from '@/components/ui/button/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/input';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginFormSchema, LoginFormSchemaT } from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FcUnlock } from 'react-icons/fc';
import { FormError } from '../form-error/FormError';
import { FormMessage } from '../form-message/FormMessage';
import { FormSuccess } from '../form-success/FormSuccess';
import styles from './LoginForm.module.scss';

const defaultValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    control,
  } = useForm<LoginFormSchemaT>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });

  useEffect(() => {
    setValue('email', 'info@cocktails.com', {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue('password', '123456aA@', {
      shouldDirty: true,
      shouldValidate: true,
    });
  }, [setValue]);

  const [isPending, setIsPending] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginFormSchemaT> = async formValues => {
    setError(null);
    setSuccess(false);
    setIsPending(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        setSuccess(true);
        router.push(DEFAULT_LOGIN_REDIRECT);
      } else {
        const { message } = await response.json();
        setError(message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form name="login-form" onSubmit={handleSubmit(onSubmit)} method="POST">
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
                  disabled={isPending || success}
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
                  disabled={isPending || success}
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
            {success && <FormSuccess message="Login success!" />}
            <Button
              type="submit"
              variant="link"
              disabled={isPending || success || !isValid}
            >
              {isPending ? 'Loging in...' : 'Login'}
            </Button>
          </menu>
        </CardFooter>
      </Card>
    </form>
  );
}
