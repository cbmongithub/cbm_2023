import axios from 'axios'

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername
    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      let repos = res.data.items
      let latestSixRepos = repos.splice(0, 6)
      return latestSixRepos
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      )
      let repos = res.data.items
      let latestSixRepos = repos.splice(0, 6)
      return latestSixRepos
    }
  } catch (err) {
    console.log(err)
  }
}

export default getLatestRepos
