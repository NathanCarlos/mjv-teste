const userService = require('../../src/services/user/user')

module.exports = async () => {
  // 2 for admin and 1 for customer
  await userService.createUser(
    'Nathan',
    'Carlos',
    '123456',
    'nathan324116@gmail.com',
    1,
    '(11)2088-5179',
    {
      'postcode': '07134625',
      'street': 'Rua Seis',
      'number': 210,
      'neighborhood': 'Parque Flamengo',
      'complement': 'Casa',
      'city': 'Guarulhos',
      'state': 'São Paulo'
    })

  await userService.createUser(
    'Admin',
    'Admin',
    '123456',
    'admin@admin.com',
    2,
    '(11)2088-5179',
    {
      'postcode': '07134625',
      'street': 'Rua Seis',
      'number': 210,
      'neighborhood': 'Parque Flamengo',
      'complement': 'Casa',
      'city': 'Guarulhos',
      'state': 'São Paulo'
    })
  console.log('User populated')
}
