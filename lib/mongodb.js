import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Missing MongoDB URI from .env.local!')
}

const client = new MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

const mongoDb = client.connect()

export default mongoDb;
