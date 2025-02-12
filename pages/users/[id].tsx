import { useRouter } from 'next/router'
import React from 'react'

export default function DetailUser() {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Detail User Page</h1>
      <p>User ID: {id}</p>
    </div>
  )
}
