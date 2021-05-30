import mongoose from 'mongoose'

const dbConnection = () => {
  mongoose.connect(process.env.DB_URI, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      let dbStatus = ''
      if (err) {
        dbStatus = `*Error connecting to DB: ${err}\n****************************\n`
      }
      dbStatus = `*DB Connection: OK\n****************************\n`

      console.log(dbStatus)
    }
  )
}

export default dbConnection