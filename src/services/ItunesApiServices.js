const baseUrl = 'https://itunes.apple.com/search'

export const searchPodcast = async (term) => {
  const url = `${baseUrl}?entity=podcast&term=${term}`

  const res = await fetch(url, { method: 'GET' })

  const { results } = await res.json()
  return results
}