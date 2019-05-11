const User = require('../../models/user/user')
const UserType = require('../../models/user/userType')
const addressService = require('./address')
const Sequelize = require('../../../database/sequelize')
const crypto = require('../../utils/crypto')

class UserServices {
  static async getUsers () {
    try {
      let response = await User.findAll({})
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async getUserById (id) {
    try {
      let response = await User.findByPk(id)
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async createTypeUser (description) {
    try {
      const response = UserType.create({
        description
      })
      return response
    } catch (err) {
      return err.message
    }
  }

  static async createUser (firstname, lastname, password, email, usersTypeId, telephone, address) {
    try {
      address = await addressService.createAddress(
        address.postcode,
        address.street,
        address.number,
        address.neighborhood,
        address.complement,
        address.city,
        address.state
      )
      const addressId = address.id
      password = await crypto(password)

      let response = await Sequelize.transaction(t => {
        return User.create({
          firstname,
          lastname,
          password,
          email,
          usersTypeId,
          telephone,
          addressId
        })
      })
      // response.password = '******'
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async updateUser (id, firstname, lastname, password, email, telephone, addressId) {
    try {
      let response = Sequelize.transaction(t => {
        return User.update(
          {
            firstname,
            lastname,
            email,
            password,
            telephone,
            addressId
          },
          { where: { id } }
        )
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async deleteUser (id) {
    try {
      let response = Sequelize.transaction(t => {
        return User.destroy({
          where: { id }
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async authUser (email, password) {
    try {
      password = await crypto(password)
      let response = await User.findAll({
        where: { email, password }
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async transformUser (user, token) {
    let newUser = {
      token,
      id: user.id,
      name: user.firstname,
      lastname: user.lastname,
      email: user.email,
      userType: user.usersTypeId,
      addressId: user.addressId
    }
    return newUser
  }
}
module.exports = UserServices
