import axios from 'axios'

const getLatestRepos = async (token) => {
  try {
    if (token) {
      const res = await axios.get(
        'https://api.github.com/search/repositories?q=user:christianbmartinez',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      let repos = res.data.items
      let newestRepos = []
      for (let i = 0; i < repos.length; i++) {
        if (repos[i].pushed_at.includes(new Date().getFullYear())) {
          newestRepos.push(repos[i])
        }
      }
      newestRepos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      return newestRepos.splice(0, 6)
    }
  } catch (err) {
    console.log(err)
  }
}

export default getLatestRepos
