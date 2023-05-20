import clientPromise from '../../lib/mongodb'

const getPosts = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('posts')

    const posts = await db
      .collection('posts')
      .find({})
      .sort({ timestamp: -1 })
      .limit(20)
      .toArray()

    res.json(posts)
  } catch (e) {
    res.json(e)
  }
}

export default getPosts
