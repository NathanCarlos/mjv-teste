const crypto = require('crypto')
const config = require('../../config/globalConfig')
module.exports = async (password) => {
  const hmac = crypto.createHmac('md5', config.secret)
  password = hmac.update('nodejsera')
  password = password.digest('hex')
  return password
}
