'use client'
import { UsersTable } from './_components/users-table'
import { fetchUsersV3 } from '@/query/fetch-users'

export default function Page() {
  const promises = Promise.all([])
  const { data: users, isLoading: isUsersLoading } = fetchUsersV3()

  console.log('users', users)

  return (
    <div>
      <p>table</p>
      <UsersTable
      // promises={promises}
      />
    </div>
  )
}
