'use client'
import Link from 'next/link'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Page,
} from '@/lib'

export const ErrorPage = () => {
  return (
    <Page layout='center'>
      <Card className=' max-w-xs m-auto'>
        <CardHeader>
          <CardTitle className='text-xl'>
            [---] Unknown
          </CardTitle>
          <CardDescription>Unknown Error occurred.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center text-sm'>
            <Link href='/' className='underline'>
              Return Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </Page>
  )
  /*
   return (
    <div className='flex w-full h-full justify-center'>
      <div className='flex max-w-4xl flex-col justify-center'>
        <h1 className='text-3xl font-bold'>{StatusCodes.NOT_FOUND}</h1>
        <p className='text-balance text-muted-foreground'>
          {ReasonPhrases.NOT_FOUND}
        </p>
      </div>
    </div>
  )
  
  */
}
