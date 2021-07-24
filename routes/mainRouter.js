import express from 'express'
import bcrypt from 'bcrypt'
import User from '../db/models/usersModel.js'
import { sessionChecker } from '../middleware/auth.js'

const router = express.Router()
const saltRounds = 10

router.route('/')
  .get((req, res) => {
    res.render('home')
  })

router.route("/registration")

  .get(sessionChecker, (req, res) => {
    res.render("registration")
  })

  // POST запрос с функцией next, для передачи ошибки
  .post(async (req, res, next) => {

    console.log(req.body)
    const { username, email, password } = req.body

    const userInDb = await User.findOne({ email })

    if (userInDb) {
      res.json({ registration: false, message: 'This email is already in use' })
    } else {
      try {
        const user = new User({
          username,
          email,
          password: await bcrypt.hash(password, saltRounds)
        })

        // дожидаемся асинхронного сохранения ресурса в базе
        await user.save()

        // формирование сессии, user добавляется в неё как объект
        req.session.user = user
        // console.log(req.session);
        // console.log(req.session.user);

        res.json({ registration: true, message: '/dashboard' })
      } catch (error) {
        next(error)
      }
    }
  })

router.route('/login')
  .get((req, res) => {
    res.render('login')
  })

  .post((req, res) => {

  })

router.route('/dashboard')
  .get((req, res) => {
    res.render('dashboard')
  })

export default router