import { useRouter } from 'next/router'
import { useState, FormEvent } from 'react'

export default function NotesServerCreate() {
  const router = useRouter()

  const [payload, setPayload] = useState<{
    title: string
    description: string
  }>({
    title: '',
    description: '',
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<{
    errors: { [key: string]: string }
  } | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/notes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data)
        return
      }

      const data = await response.json()
      if (data.success) {
        router.push('/notes/server')
      }
    } catch (error) {
      console.error('An unexpected error happened:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create Note</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={payload.title}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
            placeholder="Input title..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
          {error && typeof error === 'object' && error.errors && (
            <small className="text-red-500">{error.errors.title}</small>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={payload.description}
            onChange={(e) =>
              setPayload({ ...payload, description: e.target.value })
            }
            placeholder="Input description..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
          {error && typeof error === 'object' && error.errors && (
            <small className="text-red-500">{error.errors.description}</small>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
