import { useState } from 'react'
import cn from 'classnames'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Button from 'components/Button'
import ResultAccordion from 'components/ResultAccordion'
import { useSearchUser } from 'hooks/search'

function App() {
  const [username, setUsername] = useState<string | undefined>()

  const { result, isLoading, searchUser, error } = useSearchUser()

  return (
    <Layout>
      <Container
        className={cn('flex w-full flex-1 py-8', {
          'flex-col': result?.data?.items,
          'items-center': !result?.data?.items
        })}
      >
        <div>
          <div className="space-y-3">
            <h1 className="text-5xl leading-tight tracking-wide">
              Github Repositories Explorer
            </h1>
            <p className="text-lg">
              Find a user and their public repositories by typing their username
              into the input box below
            </p>
          </div>
          <form
            className="relative mt-5 flex items-center"
            onSubmit={(e) => {
              e.preventDefault()
              searchUser(username)
            }}
          >
            <input
              type="text"
              className="appearance-none rounded-s-lg border border-gray-400 px-3 py-2 focus-visible:outline-black"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button isLoading={isLoading}>Search</Button>
          </form>
        </div>
        <div
          className={cn('w-full mt-10 flex-1', {
            hidden: !result?.data?.items
          })}
        >
          <span className="font-light">Results</span>

          {error?.message ? (
            <span className="block text-red-600">{error?.message}</span>
          ) : null}

          <ResultAccordion result={result} />
        </div>
      </Container>
    </Layout>
  )
}

export default App
