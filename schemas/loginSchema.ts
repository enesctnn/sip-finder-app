import { z } from 'zod';

/**
 * Login form schema created with zod
 */
export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required!'),
});

/**
 * Login Form Schema Type
 */
export type LoginFormSchemaT = z.infer<typeof LoginFormSchema>;
