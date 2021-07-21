import express from 'express'
import bcrypt from 'bcrypt'
import { sessionChecker } from '../middleware/auth.js'

const router = express.Router()

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
    try {
      const { username, email, password } = req.body
      const user = new User({
        username,
        email,
        password: await bcrypt.hash(password, saltRounds)
      })
      await user.save()

      req.session.user = user // формирование сессии, user добавляется в неё как объект
      // console.log(req.session);
      // console.log(req.session.user);
      res.redirect("/dashboard")
    } catch (error) {
      next(error)
    }
  })

router.route('/dashboard')
  .get((req, res) => {
    res.render('dashboard')
  })

export default router