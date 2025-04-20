'use client'
import { UsersTable } from './_components/users-table'

export default function Page() {
  const promises = Promise.all([])

  return (
    <div>
      <p>table</p>
      <UsersTable
      // promises={promises}
      />
    </div>
  )
}
