import Link from 'next/link'
import React from 'react'

export default function User() {
  return (
    <div>
      <h1>User Page</h1>
      <ul>
        <li>
          <Link className="text-blue-500 " href="/users/1">
            User 1
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 " href="/users/2">
            User 2
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 " href="/users/3">
            User 3
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 " href="/users/4">
            User 4
          </Link>
        </li>
      </ul>
    </div>
  )
}
