import clientPromise from '../../lib/mongodb'

const addPost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('posts')
    const { name, message } = req.body

    const post = await db.collection('posts').insertOne({
      name,
      message,
    })

    res.json(post)
  } catch (e) {
    console.error(e)
  }
}

export default addPost
