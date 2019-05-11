const Category = require('../../models/catalog/category')
const Sequelize = require('../../../database/sequelize')

class CategoryServices {
  static async getCategorys () {
    try {
      const response = await Category.findAll()
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async getCategoryById (id) {
    try {
      const response = await Category.findByPk(id)
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async createCategory (status, name) {
    try {
      const response = await Sequelize.transaction(t => {
        return Category.create({
          status,
          name
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async updateCategory (id, status, name) {
    try {
      const response = await Sequelize.transaction(t => {
        return Category.update({
          status,
          name
        },
        { where: { id } })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }

  static async deleteCategory (id) {
    try {
      const response = await Sequelize.transaction(t => {
        return Category.destroy({
          where: { id }
        })
      })
      return response
    } catch (err) {
      throw err.message
    }
  }
}

module.exports = CategoryServices
