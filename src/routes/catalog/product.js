const express = require('express')
const ProductService = require('../../services/catalog/product')
const router = express.Router()
const tokenVerify = require('../../middlewares/tokenVerify')

router.get('/', async (req, res) => {
  try {
    const response = await ProductService.getProducts()
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const response = await ProductService.getProductById(req.params.id)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/category/:id', async (req, res) => {
  try {
    const response = await ProductService.getProductsByCategoryId(req.params.id)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/create', tokenVerify, async (req, res) => {
  try {
    const response = await ProductService.createProduct(
      req.body.status,
      req.body.sku,
      req.body.name,
      req.body.content,
      req.body.price,
      req.body.quantity,
      req.body.image,
      req.body.categorys
    )
    res.status(201).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/update/:id', tokenVerify, async (req, res) => {
  try {
    const response = await ProductService.updateProduct(
      req.params.id,
      req.body.status,
      req.body.sku,
      req.body.name,
      req.body.content,
      req.body.price,
      req.body.quantity
    )
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/delete/:id', tokenVerify, async (req, res) => {
  try {
    const response = await ProductService.deleteProduct(req.params.id)
    if (response !== 0) {
      res.sendStatus(200)
    } else {
      res.status(404).send({ message: 'Id do produto é inválido!' })
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
