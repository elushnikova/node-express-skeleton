import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnection from './db.js'

// главная конфигурация приложения
const config = (app) => {
  // use
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(express.static('public'))

  // set
  app.set('view engine', 'hbs')

  // run
  dotenv.config()
  dbConnection()
}

export default config