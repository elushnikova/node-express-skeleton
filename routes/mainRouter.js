import express from 'express'

const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('home')
  })

router.route('/dashboard')
  .get((req, res) => {
    res.render('dashboard')
  })

export default router