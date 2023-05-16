import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
} else {
  console.log('Connected to mongodb!')
}

client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise
