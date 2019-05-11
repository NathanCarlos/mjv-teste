const express = require('express')
const UserService = require('../../services/user/user')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../../../config/globalConfig')
const tokenVerify = require('../../middlewares/tokenVerify')

router.get('/', tokenVerify, async (req, res) => {
  try {
    const response = await UserService.getUsers()
    res.status(200).send(response)
  } catch (err) {
    res.send(err)
  }
})

router.get('/getById', tokenVerify, async (req, res) => {
  try {
    const response = await UserService.getUserById(req.userId)
    res.status(200).send(response)
  } catch (err) {
    res.send(err)
  }
})

router.post('/create', async (req, res) => {
  try {
    let response = await UserService.createUser(
      req.body.firstname,
      req.body.lastname,
      req.body.password,
      req.body.email,
      req.body.usersTypeId,
      req.body.telephone,
      req.body.address)
    const token = await jwt.sign({ userId: response.id }, config.tokenSecret, {
      expiresIn: 3600
    })
    let user = await UserService.transformUser(response, token)
    res.status(201).send(user)
  } catch (err) {
    res.send(err)
  }
})

router.put('/update', tokenVerify, async (req, res) => {
  try {
    const response = await UserService.updateUser(
      req.userId,
      req.body.firstname,
      req.body.lastname,
      req.body.password,
      req.body.email,
      req.body.telephone,
      req.body.addressId)
    res.status(200).send(response)
  } catch (err) {
    res.send(err)
  }
})

router.delete('/delete', tokenVerify, async (req, res) => {
  try {
    const response = await UserService.deleteUser(req.userId)
    if (response !== 0) {
      res.sendStatus(200)
    } else {
      res.status(404).send({ message: 'Id do usuário é inválido!' })
    }
  } catch (err) {
    res.send(err)
  }
})

router.post('/auth', async (req, res) => {
  try {
    let response = await UserService.authUser(req.body.email, req.body.password)
    if (JSON.stringify(response) !== '[]') {
      let token = await jwt.sign({ userId: response[0].id }, config.tokenSecret, {
        expiresIn: 3600
      })
      let user = await UserService.transformUser(response[0], token)
      res.send(user)
    } else {
      res.status(401).send({ message: 'Usuário inválido!' })
    }
  } catch (err) {
    res.send(err)
  }
})

module.exports = router
