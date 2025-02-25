// import HeavyComponent from '@/components/HeavyComponents'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponents'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

function AboutPage() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1 className="text-2xl font-bold">About Page</h1>
      <Link className="text-blue-500 underline font-semibold" href="/about/me">
        About Me
      </Link>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
        onClick={() => setShow(!show)}
      >
        Show
      </button>
      {show && <HeavyComponent />}

      {/* <Image width={400} height={600} alt="img" src="/img1.jpg" priority /> */}
    </div>
  )
}

export default AboutPage
