import express from 'express'
import User from '../db/models/usersModel.js'

const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('login')
  })


router.route('/:id')
  .delete(async (req, res) => {
    const { id } = req.params

    const users = await User.find()

    const index = users.findIndex(el => el._id == id)

    if (index === -1) {
      res.status(404).json({ delete: false })
    } else {
      await User.findByIdAndDelete(id, () => {
        // удаление сессии на сервере
        req.session.destroy()

        // серверное удаление куки по имени
        res.clearCookie("user_uid")

        res.status(200).json({ delete: true, message: '/' })
      })
    }
  })


export default router
