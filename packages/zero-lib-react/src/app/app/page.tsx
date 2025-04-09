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
import { fetchFilms } from '@/query/fetch-films'

export default function Page() {
  const { data: users, isLoading: isUsersLoading } = fetchUsersV3()
  const { data: films, isLoading: isFilmsLoading } = fetchFilms()
  console.log(films)

  return (
    <div className='flex flex-col p-2 prose prose-invert max-w-none *:max-w-4xl w-full overflow-auto'>
      <h2>Components</h2>
      <p>Set of reusable ui components for use on zero projects.</p>
      <GradientButtonSection />
      <PageSection />
      <CardSection />
      <FunctionSection />
      <div>
        {isUsersLoading && <p>Users Loading...</p>}
        {users &&
          users.map((user: User, key) => (
            <p key={key}>
              {user.name} - {user.email}
            </p>
          ))}
      </div>
      <div>
        {isFilmsLoading && <p>Films Loading...</p>}
        {
          // films &&
          //   films.map((film, key) => (
          //     <p key={key}>
          //       {film.name}
          //     </p>
          //   ))
        }
      </div>
    </div>
  )
}
