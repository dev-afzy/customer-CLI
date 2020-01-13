const mongoose = require('mongoose')
// map global promise get rid of warning
mongoose.Promise = global.Promise
// Db Connect
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Require model
const Customer = require('./modal/customer')

// Create Customer
const addCustomer = (customer) => {
  Customer.create(customer)
    .then(customer => {
      console.info('customer Added')
    }).catch(e => {
      console.log(e)
      db.close()
    })
}

// Find Customer

const findCustomer = (name) => {
  var search = new RegExp(name, 'i')
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
    .then(customer => {
      console.info(customer)
      console.info(`${customer.length} matches`)
      db.close()
    })
}

// Update customer
const updatecustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer)
    .then(customer => {
      console.log(`customer updated `)
    }).catch(e => {
      console.log(e)
    })
}

// Remove customer
const removecustomer = (_id) => {
  Customer.deleteOne({ _id })
    .then(customer => {
      console.info('Customer deleted')
    }).catch(e => {
      console.info(e)
    })
}

// List customer
const listcustomer = () => {
  Customer.find()
    .then(customer => {
      console.info(customer)
      console.info(`${customer.length} found`)
    }).catch(e => {
      console.info(e)
    })
}
module.exports = {
  addCustomer,
  findCustomer,
  updatecustomer,
  removecustomer,
  listcustomer
}
