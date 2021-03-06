const jwt = require('jsonwebtoken')
const config = require('../../config/globalConfig')
module.exports = (req, res, next) => {
  let token = req.headers['x-access-token']
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })

  jwt.verify(token, config.tokenSecret, function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

    req.userId = decoded.userId
    next()
  })
}
