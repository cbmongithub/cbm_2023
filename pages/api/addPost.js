import clientPromise from '../../lib/mongodb'

const addPost = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('posts')
    const { timestamp, format, formattedText, gifUrl, userName, userImage } =
      req.body
    console.log(req.body)

    const post = await db.collection('posts').insertOne({
      timestamp,
      format,
      formattedText,
      gifUrl,
      userName,
      userImage,
    })

    res.redirect('/guestbook')
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .json({ error: 'An error occurred while adding the post.', e })
  }
}

export default addPost
