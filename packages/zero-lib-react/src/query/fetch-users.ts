import { useQuery, useQueryErrorResetBoundary } from '@tanstack/react-query'
import { User, usersSchema } from './types'

type FetchUsersParams = {
  userId?: number
  filter?: string
}

export const fetchUsersV3 = (params?: FetchUsersParams) => {
  const { userId, filter } = params || {}

  return useQuery<User[]>({
    queryKey: ['users', filter, userId],
    queryFn: () => {
      return (
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => data)
          .catch(error => {
            console.error('Error fetching users:', error) // Add logger
            throw error
          })
          // .finally(() => {
          //   console.log('Fetch users completed')
          // })
          .then(data => {
            console.log('Fetched users:', data)
            return data
          })
          .then(data => {
            const {
              data: parsedData,
              success,
              error,
            } = usersSchema.safeParse(data)
            if (error) {
              console.error('Error parsing users:', error)
              throw error
            }
            console.log('Parsed users:', parsedData)
            return parsedData
          })
      )
    },
  })
}

export const fetchUsers = ({}: FetchUsersParams) => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.error('Error fetching users:', error)
      throw error
    })
    .finally(() => {
      console.log('Fetch users completed')
    })
    .then(data => {
      console.log('Fetched users:', data)
      return data
    })
}

export const fetchUsersV2 = ({}: FetchUsersParams) => {
  return {
    queryKey: ['users'],
    queryFn: () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data)
        .catch(error => {
          console.error('Error fetching users:', error)
          throw error
        })
        .finally(() => {
          console.log('Fetch users completed')
        })
        .then(data => {
          console.log('Fetched users:', data)
          return data
        })
    },
  }
}
