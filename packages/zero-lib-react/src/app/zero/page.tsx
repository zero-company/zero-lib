'use client'
import { GradientButton } from '@/lib'

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
    </div>
  )
}
