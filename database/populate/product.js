const productService = require('../../src/services/catalog/product')

module.exports = async () => {
  await productService.createProduct(
    1,
    '12345678910232',
    'Notebook Positivo Motion Q232A Intel Atom Quad Core 2GB 32GB SSD Tela LCD 14" Windows 10 - Vermelho',
    'O notebook positivo motion q232a, nos da uma nova sensação de velocidade, precisão e qualidade, sem dúvidas é o melhor produto para se comprar.',
    2980,
    15,
    'https://images-americanas.b2w.io/produtos/01/00/item/132897/6/132897606_1GG.png',
    [1, 6]
  )
  await productService.createProduct(
    1,
    '53345678910232',
    'Notebook Expert X40 8ª Intel Core I5 8GB (GeForce MX110 com 2GB) 1TB LED HD 15,6 Polegadas W10 Cinza Titânio - Samsung',
    'O notebook expert x40, nos da uma nova sensação de velocidade, precisão e qualidade, sem dúvidas é o melhor produto para se comprar.',
    1850,
    25,
    'https://images-americanas.b2w.io/produtos/01/00/item/133621/8/133621821_1GG.png',
    [1, 6]
  )
  await productService.createProduct(
    1,
    '5345678910232',
    'Smartphone Samsung Galaxy M30 64GB Dual Chip Android 8.1 Tela 6.4" Octa-Core 4G Câmera 13MP +5MP+5MP - Azul',
    'O moto smartphone galaxy m30 é super rápido, com muita velocidade de processamento e memória ram',
    899,
    20,
    'https://images-americanas.b2w.io/produtos/01/00/oferta/134256/1/134256132_1GG.jpg',
    [2, 6]
  )
  await productService.createProduct(
    1,
    '5345678910232',
    'Smartphone Motorola Moto G7 Play 32GB Dual Chip Android Pie - 9.0 Tela 5.7" 1.8 GHz Octa-Core 4G Câmera 13MP - Indigo',
    'O moto g7 é super rápido, com muita velocidade de processamento e memória ram',
    999,
    20,
    'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134186/8/134186808_1GG.jpg',
    [2, 6]
  )
  await productService.createProduct(
    1,
    '7245678910232',
    'Game - Batman: Arkham Knight - PS4',
    'O game leva a premiada trilogia de Arkham da Rocksteady Studios à sua conclusão épica. No final explosivo da série Arkham, Batman enfrenta a maior ameaça contra a cidade que ele jurou proteger. O Espantalho retornou e reuniu um grupo impressionante de supervilões, incluindo o Pinguim, o Duas-Caras e a Arlequina, para destruir de vez o Cavaleiro das Trevas.',
    99,
    20,
    'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/123064/6/123064653_1GG.jpg',
    [3, 6]
  )
  await productService.createProduct(
    1,
    '8473678910232',
    'Impressora Multifuncional Epson Tanque De Tinta L395 Wi-Fi',
    'Imprime até 7.500 páginas coloridas e 4.500 páginas em preto. Uma garrafa de tinta EcoTank equivale a 35 cartuchos.',
    889,
    20,
    'https://images-americanas.b2w.io/produtos/01/00/oferta/22934/0/22934001_1GG.jpg',
    [4, 6]
  )
  await productService.createProduct(
    1,
    '9233678910232',
    'TV LED 32" Philco PTV32B51D Resolução HD com Conversor Digital 2 HDMI 2 USB Recepção Digital',
    'Com a TV Led 32 polegadas da Philco, assista sua programação preferida em alta definição com clareza e nitidez. Com resolução HD, conta com função DNR, que reduz os ruídos de imagem e Progressive Scan: Modo de geração de imagem na tela inteira em uma única passada, transmitindo e exibindo todas as linhas da tela a cada atualização. Além disso, a TV possui recurso de áudio SAP/MTS, equalizadores de som predefinidos que potencializa ainda mais a qualidade da TV. E mais: Conversor digital integrado, entrada USB e HDMI.',
    1000,
    20,
    'https://images-americanas.b2w.io/produtos/01/00/item/133877/3/133877308_1GG.jpg',
    [5, 6]
  )
  await productService.createProduct(
    1,
    '932678910232',
    'Kit Upgrade Placa Mãe Asrock N68-Gs4 Fx R2.0 Ddr3 + Processador Amd Fx 6300 3.5ghz Am3 + - Am Rio Informatica',
    'O KIT UPGRADE CONTÉM OS SEGUINTES PRODUTOS: 1 PLACA MÃE ASROCK N68-GS4 FX R2.0 AM3 + 1 PROCESSADOR AMD FX 6300 3.5GHZ ',
    889,
    20,
    'https://images-americanas.b2w.io/produtos/01/00/oferta/46723/2/46723242_1GG.jpg',
    [6]
  )

  console.log('Product populated')
}
