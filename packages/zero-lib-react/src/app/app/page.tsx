'use client'
import { GradientButton, CardV2, CardHeader } from '@/lib'
import Link from 'next/link'
import { GradientButtonSection, PageSection, CardSection } from './sections'

export default function Page() {
  return (
    <div className='flex flex-col p-2 prose prose-invert'>
      <h2>Components</h2>
      <p>Set of reusable ui components for use on zero projects.</p>
      <GradientButtonSection />
      <PageSection />
      <CardSection />
    </div>
  )
}
