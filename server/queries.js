const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'mVcqk4s9DKFQ9hKk57nj',
  port: 5432,
})

function getOrders(request, response) {

  pool.query(`SELECT * FROM companies ORDER BY id ASC`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function getOrderType(request, response) {

  pool.query(`SELECT * FROM companies WHERE ordertype = '${request.params.ordertype}' ORDER BY id ASC`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function getOrderById(request, response) {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM companies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function getOrderById(request, response) {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM companies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function createOrder(request, response) {
  const {
    index,
    guid,
    balance,
    phone,
    address,
    registered,
    name,
    email
  } = request.body

  pool.query('INSERT INTO companies (index, guid, balance, phone, address, registered, name, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [
      index,
      guid,
      balance,
      phone,
      address,
      registered,
      name,
      email
    ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}


function updateOrder(request, response) {
  const id = parseInt(request.params.id)

  const {
    index,
    guid,
    balance,
    phone,
    address,
    registered,
    name,
    email,
    ordertype
  } = request.body


  pool.query(
    'UPDATE companies SET index = $1, guid = $2, balance = $3, phone = $4, address = $5, registered = $6, name = $7, email = $8, ordertype = $9 WHERE id = $10',
    [index, guid, balance, phone, address, registered, name, email, ordertype, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

function deleteOrder(request, response) {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM companies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getOrders,
  getOrderType,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
}