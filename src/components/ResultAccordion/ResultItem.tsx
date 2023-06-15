import { useEffect } from 'react'
import { useFindRepoByUser } from 'hooks/repo'
import Spinner from 'components/Spinner'
import RepoCard from './RepoCard'

function ResultItem({ username }: { username: string }) {
  const { result, isLoading, findRepoByUser, error } = useFindRepoByUser()

  useEffect(() => {
    if (username) {
      findRepoByUser(username)
    }
  }, [username, findRepoByUser])

  return (
    <div className="space-y-2">
      {error?.message ? (
        <span className="block text-red-600">{error?.message}</span>
      ) : null}

      {isLoading ? <Spinner /> : null}
      {!isLoading && result?.data && result?.data?.length < 1
        ? 'No repository found'
        : null}
      {result?.data?.map((repo) => (
        <RepoCard key={repo.html_url} data={repo} />
      ))}
    </div>
  )
}

export default ResultItem
