import { z } from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Email must be valid.',
    }),
    password: z.string().min(4, {
        message: 'Password must be more than 4 character.',
    }),
});
