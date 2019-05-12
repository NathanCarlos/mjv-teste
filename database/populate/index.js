const populateUserType = require('./userType')
const populateUser = require('./user')
const populateCategory = require('./category')
const populateProduct = require('./product')
const sequelize = require('../../database/sequelize')

const sync = new Promise(
  function (resolve, reject) {
    resolve(sequelize.sync())
  })
sync.then(result => {
  populateCategory().then(result => {
    Promise.all([populateUserType(), populateUser(), populateProduct()]).then(
      result => {
        console.log('All Populated')
      })
  })
})
