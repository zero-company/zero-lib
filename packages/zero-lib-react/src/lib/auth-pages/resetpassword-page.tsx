'use client'
import Link from 'next/link'
import {
  Button,
  CardV2,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Page,
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
} from '@/lib'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  password: z.string({ required_error: 'New Password required' }).min(8, {
    message: 'New Password must be at least 8 characters.',
  }),
  verifyPassword: z
    .string({ required_error: 'Verify Password required' })
    .min(8, {
      message: 'Verify Password must be at least 8 characters.',
    }),
})
const formSchemaKeys = formSchema.keyof()
type FormSchemaType = z.infer<typeof formSchema>
type FormSchemaKeysType = z.infer<typeof formSchemaKeys>

type Props = {
  signupUrl: string
  signinUrl: string
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

// use url query change password recovery token
export const ResetPasswordPage = ({
  signupUrl,
  signinUrl,
  onSubmit,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
          <CardTitle className='text-xl'>Reset Password</CardTitle>
          <CardDescription>Enter your new Password</CardDescription>
        </CardHeader>
        <CardContent className='!pt-0'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='••••' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='verifyPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verify Password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='••••' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='grid gap-4'>
                <Button type='submit' className='w-full'>
                  Reset
                </Button>
              </div>
              <div className='mt-4 text-center text-sm'>
                <Link href={signinUrl} className='underline'>
                  Sign In
                </Link>
                {' / '}
                <Link href={signupUrl} className='underline'>
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </CardV2>
    </Page>
  )
}
