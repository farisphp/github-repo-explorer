import { useCallback, useState } from 'react'
import { RestEndpointMethodTypes, Octokit } from '@octokit/rest'
import { ErrorException, exception } from 'utils/exception'

function useSearchUser() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorException | undefined>()
  const [result, setResult] = useState<
    RestEndpointMethodTypes['search']['users']['response'] | undefined
  >()

  const searchUser = useCallback(async (username?: string) => {
    if (!username) return

    const octokit = new Octokit()
    try {
      /** Reset error state every new request */
      setError(undefined)

      setIsLoading(true)
      const res = await octokit.rest.search.users({
        q: username,
        per_page: 5
      })
      setIsLoading(false)

      setResult(res)
    } catch (error: unknown) {
      setError(exception(error))
    }
  }, [])

  return {
    result,
    isLoading,
    searchUser,
    error
  }
}

export { useSearchUser }
