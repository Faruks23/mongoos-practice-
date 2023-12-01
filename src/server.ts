import app from './app'
import mongoose from 'mongoose'
import config from './app/config'
// const MONGO_URI =
//   'mongodb+srv://mongoos:mongos123@cluster0.mafpasm.mongodb.net/practice-project?retryWrites=true&w=majority'

// const port = process.env.PORT || 5000

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`Example app listening on port here ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
