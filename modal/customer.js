const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String }
})

module.exports = mongoose.model('customer', customerSchema)
