export async function fetchUserData(userId, accessToken) {
  const response = await fetch(`http://localhost:8081/api/v1/students/${userId}`, {
    headers: { Authentication: `Bearer ${accessToken}` }
  })

  const data = await response.json()
  const student = data.data

  return student
}