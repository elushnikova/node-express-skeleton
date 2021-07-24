import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import dbConnection from '../db.js'
import User from '../models/usersModel.js'

const saltRounds = 10

async function seedUsers(username, email, password) {
  dotenv.config()

  dbConnection()

  const user = new User({
    username,
    email,
    password: await bcrypt.hash(password, saltRounds)
  })

  // дожидаемся асинхронного сохранения ресурса в базе
  await user.save()

  // отключение от БД
  mongoose.disconnect()
}

seedUsers(process.argv[2], process.argv[3], process.argv[4])