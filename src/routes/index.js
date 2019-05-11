const express = require('express')
const router = express.Router()
const user = require('./user/user')
const product = require('./catalog/product')
const category = require('./catalog/category')

router.use('/category', category)
router.use('/product', product)
router.use('/user', user)
router.get('/', (req, res) => {
  res.send({ Description: 'mjv test API', Version: '1.0.0' })
})

module.exports = router
