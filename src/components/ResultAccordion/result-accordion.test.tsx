import { render, screen } from '@testing-library/react'
import ResultAccordion from '.'
import RepoCard from './RepoCard'
import ResultItem from './ResultItem'
import { RestEndpointMethodTypes } from '@octokit/rest'
import { Mocked, vi } from 'vitest'

const repoData = {
  id: 654181138,
  node_id: 'R_kgDOJv4DEg',
  name: 'github-repo-explorer',
  full_name: 'farisphp/github-repo-explorer',
  html_url: 'https://github.com/farisphp/github-repo-explorer',
  description: 'Find a user and their public repositories by their username.',
  created_at: '2023-06-15T14:53:21Z',
  updated_at: '2023-06-15T15:38:46Z',
  pushed_at: '2023-06-15T15:38:15Z',
  stargazers_count: 0,
  language: 'TypeScript'
}

const resultData = {
  total_count: 1,
  incomplete_results: false,
  items: [
    {
      login: 'farisphp',
      avatar_url: 'https://avatars.githubusercontent.com/u/22131960?v=4'
    }
  ]
}

vi.mock('hooks/repo', () => {
  const mockUseFindRepoByUser = vi.fn(() => ({
    result: {
      data: [
        repoData
      ] as unknown as RestEndpointMethodTypes['repos']['listForUser']['response']
    },
    isLoading: false,
    findRepoByUser: async (username: string) => {
      console.log()
    },
    error: undefined
  }))
  // Client.prototype.connect = vi.fn()
  // Client.prototype.query = vi.fn()
  // Client.prototype.end = vi.fn()

  return { useFindRepoByUser: mockUseFindRepoByUser }
})

describe('<ResultAccordion />', () => {
  it('should render result accordion correctly', () => {
    const { container } = render(
      <ResultAccordion
        result={
          {
            data: resultData
          } as RestEndpointMethodTypes['search']['users']['response']
        }
      />
    )

    const title = screen.getByRole('heading', { name: 'farisphp', level: 3 })
    expect(title).toBeInTheDocument()

    const buttonTrigger = screen.getByRole('button', {
      name: 'farisphp'
    })
    expect(buttonTrigger).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<ResultItem />', () => {
  it('should render result item correctly', () => {
    const { container } = render(<ResultItem username="farisphp" />)

    const repoLink = screen.getByRole('link')
    expect(repoLink).toBeInTheDocument()
    expect(repoLink).toHaveAttribute('href', repoData.html_url)

    const repoTitle = screen.getByRole('heading', {
      name: 'github-repo-explorer',
      level: 3
    })
    expect(repoTitle).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<RepoCard />', () => {
  it('should render repo card correctly', () => {
    const { container } = render(
      <RepoCard
        data={
          repoData as RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0]
        }
      />
    )

    const repoLink = screen.getByRole('link')
    expect(repoLink).toBeInTheDocument()
    expect(repoLink).toHaveAttribute('href', repoData.html_url)

    const repoTitle = screen.getByRole('heading', {
      name: 'github-repo-explorer',
      level: 3
    })
    expect(repoTitle).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
