'use client'
import Link from 'next/link'
import {
  cn,
  Button,
  Card,
  CardV2,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Page,
} from '@/lib'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
})
const formSchemaKeys = formSchema.keyof()
type FormSchemaType = z.infer<typeof formSchema>
type FormSchemaKeysType = z.infer<typeof formSchemaKeys>

type Props = {
  signupUrl: string
  onSubmit: (values: z.infer<typeof formSchema>) => void
  forgotPasswordUrl: string
}

export const SigninPage = ({
  signupUrl,
  onSubmit,
  forgotPasswordUrl,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const formErrors = form.formState.errors
  const formErrorKeys = Object.keys(formErrors) as FormSchemaKeysType[]
  const errorMessages = formErrorKeys.map(
    (error: FormSchemaKeysType) => formErrors[error]?.message,
  )

  return (
    <Page layout='center' innerClassName='max-w-sm w-full'>
      {errorMessages.length > 0 && (
        <CardV2 color='error' className='text-xs'>
          <CardHeader>
            {errorMessages.map((message, key) => (
              <p key={key}>• {message}</p>
            ))}
          </CardHeader>
        </CardV2>
      )}
      <CardV2>
        <CardHeader>
          <CardTitle className='text-xl'>Sign In</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <Link
                  href='#'
                  className='ml-auto inline-block text-sm underline'
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='#' className='underline'>
              Sign up
            </Link>
          </div>
        </CardContent>
      </CardV2>
    </Page>
  )
}
