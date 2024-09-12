import Link from 'next/link'
import { FeatureCard } from './cards'

export default function Page() {
  return (
    <main className='flex flex-col p-2 gap-2'>
      <p className=''>About App</p>
      <div className='flex gap-2'>
        <FeatureCard />
        <FeatureCard />
      </div>
    </main>
  )
}
