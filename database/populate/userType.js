const userService = require('../../src/services/user/user')

module.exports = async () => {
  await userService.createTypeUser('customer')
  await userService.createTypeUser('admin')
  console.log('User Type Populated')
}
