const express = require('express')
const CategoryService = require('../../services/catalog/category')
const router = express.Router()
const tokenVerify = require('../../middlewares/tokenVerify')

router.get('/', async (req, res) => {
  try {
    const response = await CategoryService.getCategorys()
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const response = await CategoryService.getCategoryById(req.params.id)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/create', tokenVerify, async (req, res) => {
  try {
    const response = await CategoryService.createCategory(req.body.status, req.body.name)
    res.status(201).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/update/:id', tokenVerify, async (req, res) => {
  try {
    const response = await CategoryService.updateCategory(req.params.id, req.body.status, req.body.name)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/delete/:id', tokenVerify, async (req, res) => {
  try {
    const response = await CategoryService.deleteCategory(req.params.id)
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
