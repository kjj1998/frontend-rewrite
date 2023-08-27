async function handler(req, res) {
  const updatedProfile = req.body

  const response = await fetch(`http://localhost:8081/api/v1/students/update`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedProfile)
  })

  const result = await response.json()

  res.status(200).json({ data: result.data })
}

export default handler