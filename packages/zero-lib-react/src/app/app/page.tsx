'use client'
import { GradientButton, CardV2, CardHeader } from '@/lib'
import Link from 'next/link'
import {
  GradientButtonSection,
  PageSection,
  CardSection,
  FunctionSection,
} from './sections'
import { useQuery } from '@tanstack/react-query'
import type { User } from '@/query/types'
import { fetchUsersV3 } from '@/query/fetch-users'

export default function Page() {
  const { data: users, isLoading } = fetchUsersV3()

  return (
    <div className='flex flex-col p-2 prose prose-invert max-w-none *:max-w-4xl w-full overflow-auto'>
      <h2>Components</h2>
      <p>Set of reusable ui components for use on zero projects.</p>
      <GradientButtonSection />
      <PageSection />
      <CardSection />
      <FunctionSection />
      {isLoading && <p>Loading...</p>}
      {users &&
        users.map((user: User, key) => (
          <p key={key}>
            {user.name} - {user.email}
          </p>
        ))}
    </div>
  )
}
