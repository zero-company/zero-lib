'use client'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib'

type Props = {
  className?: string
}

export const NotFoundPage = ({ className }: Props) => {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>[404] Not Found</CardTitle>
          <CardDescription>This page could not be found.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center text-sm'>
            <Link href='/' className='underline'>
              Return Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
