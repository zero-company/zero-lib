'use client'
import Link from 'next/link'
import {
  CardV2,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Page,
} from '@/lib'

type Props = {
  homeUrl: string
}

export const VerifiedEmailPage = ({ homeUrl }: Props) => {
  return (
    <Page layout='center' innerClassName='max-w-sm w-full'>
      <CardV2>
        <CardHeader>
          <CardTitle className='text-xl'>Verified Email</CardTitle>
          <CardDescription>
            You have completed the verification process
          </CardDescription>
        </CardHeader>
        <CardContent className='!pt-0'>
          <div className='mt-4 text-center text-sm'>
            <Link href={homeUrl} className='underline'>
              Return Home
            </Link>
          </div>
        </CardContent>
      </CardV2>
    </Page>
  )
}
