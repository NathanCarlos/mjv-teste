const populateUserType = require('./userType')
const populateUser = require('./user')

populateUserType().then(result => {
  populateUser().then(response => {
    console.log('All works!')
  })
})
