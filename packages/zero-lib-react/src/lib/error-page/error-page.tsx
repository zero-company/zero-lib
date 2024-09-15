import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const ErrorPage = () => {
  return (
    <div className='flex w-full h-full justify-center'>
      <div className='flex max-w-4xl items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2'>
            <h1 className='text-3xl font-bold'>Error</h1>
            <p className='text-balance text-muted-foreground'>
              Something went wrong
            </p>
          </div>
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
                  href='/forgot-password'
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
        </div>
      </div>
    </div>
  )
}
