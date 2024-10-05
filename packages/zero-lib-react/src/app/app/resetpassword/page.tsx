'use client'
import { ResetPasswordPage } from '@/lib'

export default function Page() {
  return (
    <>
      <ResetPasswordPage
        signupUrl='/app/signup'
        signinUrl='/app/signin'
        onSubmit={values => console.log(values)}
      />
    </>
  )
}
