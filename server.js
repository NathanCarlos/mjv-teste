const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

process.env.PORT = process.env.PORT || 3000
app.listen(process.env.PORT, () => {
  console.log(`Api is up on port: ${process.env.PORT}`)
})
