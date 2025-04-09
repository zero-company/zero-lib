type FetchUsersParams = {
  // userId?: number
  // filter?: string
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
