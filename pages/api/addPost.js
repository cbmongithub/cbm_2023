import clientPromise from '../../lib/mongodb'

const addPost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('posts')
    const { name, message, timestamp } = req.body

    const post = await db.collection('posts').insertOne({
      name,
      message,
      timestamp,
    })

    res.redirect('/guestbook')
  } catch (e) {
    console.error(e)
  }
}

export default addPost
