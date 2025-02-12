import Link from 'next/link'
import React from 'react'

function about() {
  return (
    <div className=" ">
      <div>
        <h1 className="text-2xl font-bold">About Page</h1>
        <Link
          className="text-blue-500 underline font-semibold"
          href="/about/me"
        >
          About Me
        </Link>
      </div>
    </div>
  )
}

export default about
