import app from './app'
import mongoose from 'mongoose'
const MONGO_URI =
  'mongodb+srv://mongoos:mongos123@cluster0.mafpasm.mongodb.net/practice-project?retryWrites=true&w=majority'

const port = process.env.PORT || 5000

async function main() {
  try {
    await mongoose.connect(MONGO_URI as string)

    app.listen(port, () => {
      console.log(`Example app listening on port here ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
