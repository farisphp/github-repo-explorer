import { useCallback, useState } from 'react'
import { RestEndpointMethodTypes, Octokit } from '@octokit/rest'
import { ErrorException, exception } from 'utils/exception'

function useFindRepoByUser() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorException | undefined>()
  const [result, setResult] = useState<
    RestEndpointMethodTypes['repos']['listForUser']['response'] | undefined
  >()

  const findRepoByUser = useCallback(async (username?: string) => {
    if (!username) return

    const octokit = new Octokit()
    try {
      /** Reset error state every new request */
      setError(undefined)

      setIsLoading(true)
      const repo = await octokit.repos.listForUser({ username })
      setIsLoading(false)

      setResult(repo)
    } catch (error: unknown) {
      setError(exception(error))
    }
  }, [])

  return {
    result,
    isLoading,
    findRepoByUser,
    error
  }
}

export { useFindRepoByUser }
