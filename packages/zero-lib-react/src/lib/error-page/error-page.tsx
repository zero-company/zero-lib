'use client'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const ErrorPage = () => {
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
}
