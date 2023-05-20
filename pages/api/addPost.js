import clientPromise from '../../lib/mongodb'

const addPost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('posts')
    const { timestamp, format, formattedText, gifUrl } = req.body
    console.log(req.body)

    const post = await db.collection('posts').insertOne({
      timestamp,
      format,
      formattedText,
      gifUrl,
    })

    res.redirect('/guestbook')
  } catch (e) {
    res.json(e)
  }
}

export default addPost
