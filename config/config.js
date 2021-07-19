import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnection from '../db/db.js'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'

const workDir = path.resolve()

// главная конфигурация приложения
const config = (app) => {
  // use
  app.use(helmet())
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(express.static('public'))

  // set
  app.set('view engine', 'hbs')
  app.set('views', path.join(workDir, './views'))

  // run
  dotenv.config()
  dbConnection()
}

export default config