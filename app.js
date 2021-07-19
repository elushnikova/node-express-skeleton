import express from 'express'
import config from './config/config.js'
import mainRouter from './routes/mainRouter.js'
import usersRouter from './routes/usersRouter.js'

// инициализация приложения 'app'
const app = express()

// условное формирование порта
const port = process.env.PORT || 4000

// конфигурация приложения
config(app)

// маршрутизация приложения
app.use('/', mainRouter)
app.use('/users', usersRouter)

// прослушивание порта приложения
app.listen(port, () => console.log(`*Server started at ${port} port`))