const productService = require('../../src/services/catalog/product')

module.exports = async () => {
  await productService.createProduct(
    1,
    '12345678910232',
    'Produto A',
    'O produto A tem ótimas vantagens e pode ser utilizado de várias formas diferentes',
    2980,
    15,
    'https://s1.webglobal.com.br/113/680/notebook-positivo-motion-q232a-intel-atom-quad-core-2gb-32gb-ssd-tela-lcd-14-windows-10-vermelho-113680205.png',
    1
  )
  await productService.createProduct(
    1,
    '5345678910232',
    'Produto B',
    'O produto B tem ótimas vantagens e pode ser utilizado de várias formas diferentes',
    3100,
    20,
    'https://imagens.canaltech.com.br/115697.194089-10-notebooks.jpg',
    1
  )

  console.log('Product populated')
}
