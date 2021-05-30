import express from 'express'
import config from './middleware/config.js'
import mainRouter from './routes/main.js'

const app = express()
const port = process.env.PORT || 3000

config(app)

app.use('/', mainRouter)

app.listen(port, () => console.log(`*Server started at ${port} port`))