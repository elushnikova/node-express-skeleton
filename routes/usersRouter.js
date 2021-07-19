import express from 'express'

const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('login')
  })
  .post((req, res) => { })

router.route('/:id')
  .get((req, res) => { })
  .post((req, res) => { })

export default router
