const categoryService = require('../../src/services/catalog/category')

module.exports = async () => {
  await categoryService.createCategory(1, 'Notebook', 'http://3.17.48.179/media/catalog/category/notebook.png')
  await categoryService.createCategory(1, 'Smartphones', 'http://3.17.48.179/media/catalog/category/telefonia.png')
  await categoryService.createCategory(1, 'Games', 'http://3.17.48.179/media/catalog/category/games.png')
  await categoryService.createCategory(1, 'Impressão e Imagem', 'http://3.17.48.179/media/catalog/category/impressao.png')
  await categoryService.createCategory(1, 'Tv, Áudio e Vídeo', 'http://3.17.48.179/media/catalog/category/tvaudio.png')
  await categoryService.createCategory(1, 'Informática', 'http://3.17.48.179/media/catalog/category/informatica.png')
  console.log('Category populated')
}
