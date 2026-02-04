export type GitHubRepo = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics?: string[]
  homepage?: string
  license?: { spdx_id?: string | null; name?: string | null } | null
}

type CacheEntry = {
  data: GitHubRepo[]
  fetchedAt: number
}

const cache = new Map<string, CacheEntry>()
const TTL = 1000 * 60 * 5

export async function fetchGithubRepos(username: string) {
  const cached = cache.get(username)
  if (cached && Date.now() - cached.fetchedAt < TTL) {
    return cached.data
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    },
  )

  if (response.status === 403) {
    const remaining = response.headers.get('x-ratelimit-remaining')
    if (remaining === '0') {
      throw new Error('rate_limited')
    }
  }

  if (!response.ok) {
    throw new Error(`github_error_${response.status}`)
  }

  const data = (await response.json()) as GitHubRepo[]
  const repos = Array.isArray(data) ? data : []
  cache.set(username, { data: repos, fetchedAt: Date.now() })
  return repos
}
