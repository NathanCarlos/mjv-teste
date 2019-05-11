var express = require('express')
var router = express.Router()
var user = require('./user')

router.use('/user', user)
router.get('/', (req, res) => {
  res.send({ Description: 'mjv test API', Version: '1.0.0' })
})

module.exports = router
