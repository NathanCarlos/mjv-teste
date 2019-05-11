const categoryService = require('../../src/services/catalog/category')

module.exports = async () => {
  await categoryService.createCategory(1, 'Notebook')
  console.log('Category populated')
}
