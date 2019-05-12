const crypto = require('crypto')

module.exports = async (password) => {
  const hmac = crypto.createHmac('sha256', password)
    .update('I love cupcakes')
    .digest('hex')
  return hmac
}
