import axios from 'axios'

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername
    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-desc`,
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
      return newestRepos
    }
  } catch (err) {
    console.log(err)
  }
}

export default getLatestRepos
