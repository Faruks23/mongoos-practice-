import app from './app'
import mongoose from 'mongoose'
import config from './app/config'
import {Server} from 'http'

let server:Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
   console.log('db-connected')
   server=app.listen(config.port, () => {
      console.log(`Example app listening on port here ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()

process.on('unhandledRejection', () => {
  console.log('unhandledRejection is detected');
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => { 
   console.log('uncaughtException is detected')
  process.exit(1)
})
