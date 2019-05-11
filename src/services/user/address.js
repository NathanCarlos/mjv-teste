/* eslint-disable no-dupe-class-members */
const Address = require('../../models/user/address')
const Sequelize = require('../../../database/sequelize')

class AddressServices {
  static async getAddresss () {
    try {
      let response = await Address.findAll({})
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async getAddresssById (id) {
    try {
      let response = await Address.findByPk(id)
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async createAddress (postcode, street, number, neighborhood, complement, city, state) {
    try {
      let response = await Sequelize.transaction(t => {
        return Address.create({
          postcode,
          street,
          number,
          neighborhood,
          complement,
          city,
          state
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
  static async updateAddress (id, postcode, street, number, neighborhood, complement, city, state) {
    try {
      let response = Sequelize.transaction(t => {
        return Address.update(
          {
            postcode,
            street,
            number,
            neighborhood,
            complement,
            city,
            state
          },
          { where: { id } }
        )
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
}
module.exports = AddressServices
