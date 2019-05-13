const crypto = require('crypto')
const config = require('../../config/globalConfig')
module.exports = async (password) => {
  const hmac = crypto.createHmac('sha256', password)
    .update(config.secret)
    .digest('hex')
  return hmac
}
