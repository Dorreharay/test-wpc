const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000;
const cors = require('cors')

const db = require('./queries.js')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/orders', db.getOrders)
app.get('/orders/orderType/:ordertype', db.getOrderType)
app.get('/orders/:id', db.getOrderById)
app.post('/orders', db.createOrder)
app.put('/orders/:id', db.updateOrder)
app.delete('/orders/:id', db.deleteOrder)

app.get('/', (request, response) => {
  response.send("Don't worry, server is working ^^")
})


app.listen(port, () => {
  console.info(`App running on port ${port}.`)
})
