'use client'
import { GradientButton } from '@/lib'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col p-2 prose prose-invert'>
      <h2>Components</h2>
      <p>Set of reusable ui components for use on zero projects.</p>
      <div>
        <h3>Gradient Buttons</h3>
        <div className='space-x-2 space-y-2'>
          <GradientButton>Default Purple1</GradientButton>
          <GradientButton gradient='purple2'>Purple2</GradientButton>
          <GradientButton gradient='indigo1'>Indigo1</GradientButton>
          <GradientButton gradient='blue1'>Blue1</GradientButton>
          <GradientButton gradient='orange1'>Orange1</GradientButton>
          <GradientButton gradient='orange2'>Orange2</GradientButton>
          <GradientButton gradient='red1'>Red1</GradientButton>
          <GradientButton gradient='pink1'>Pink1</GradientButton>
          <GradientButton gradient='pink2'>Pink2</GradientButton>
        </div>
      </div>
      <div>
        <h3>Pages</h3>
        <div className='space-x-2 space-y-2'>
          <Link href='./splash-page' className='flex-1' target='_blank'>
            Splash
          </Link>
          <Link href='./notfound-page' className='flex-1' target='_blank'>
            NotFound
          </Link>
          <Link href='./signin-page' className='flex-1' target='_blank'>
            Signin
          </Link>
          <Link href='./signup-page' className='flex-1' target='_blank'>
            Signup
          </Link>
        </div>
      </div>
      <div>
        <h3>Cards</h3>
        <div className='space-x-2 space-y-2'></div>
      </div>
    </div>
  )
}
