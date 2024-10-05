'use client'
import { ResetPasswordPage } from '@/lib'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const resetPasswordToken = searchParams.get('resetPasswordToken')

  return (
    <>
      <ResetPasswordPage
        resetPasswordToken={resetPasswordToken || undefined}
        signupUrl='/app/signup'
        signinUrl='/app/signin'
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
