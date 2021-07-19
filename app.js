import express from 'express'
import config from './config/config.js'
import mainRouter from './routes/main.js'

const app = express()
const port = process.env.PORT || 4000

// конфигурация приложения
config(app)

// роутинг
app.use('/', mainRouter)

// прослушивание порта приложения
app.listen(port, () => console.log(`*Server started at ${port} port`))