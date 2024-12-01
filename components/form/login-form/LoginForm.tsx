'use client';

import { login } from '@/actions/login';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { LoginFormContent } from '../login-form-content/LoginFormContent';

export function LoginForm() {
	const [error, setError] = useState<string | undefined>(undefined);
	const [state, formAction] = useFormState(login, { error: '' });

	useEffect(() => {
		setError(undefined);
		if (state?.error) {
			setError(state.error);
		}
	}, [state]);

	return (
		<form
			name="login-form"
			action={formAction}
		>
			<LoginFormContent error={error} />
		</form>
	);
}
