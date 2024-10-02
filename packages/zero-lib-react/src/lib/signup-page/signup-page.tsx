'use client'
import Link from 'next/link'
import {
  cn,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  CardV2,
} from '@/lib'

type Props = {
  className?: string
}

export const SignupPage = ({ className }: Props) => {
  return (
    <div className={cn('flex-1 flex flex-col p-2', className)}>
      <div className='m-auto space-y-2'>
        <CardV2 color='error' className='text-xs'>
          <CardHeader>
            <p>• [validation] Invalid email</p>
            <p>• [server] Authentication error</p>
          </CardHeader>
        </CardV2>
        <Card className='mx-auto max-w-sm m-auto w-full rounded-md *:p-4'>
          <CardHeader>
            <CardTitle className='text-xl'>Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='first-name'>First name</Label>
                  <Input id='first-name' placeholder='Max' required />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='last-name'>Last name</Label>
                  <Input id='last-name' placeholder='Robinson' required />
                </div>
              </div>
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
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password' />
              </div>
              <Button type='submit' className='w-full'>
                Create an account
              </Button>
              <Button variant='outline' className='w-full'>
                Sign up with GitHub
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <Link href='#' className='underline'>
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
