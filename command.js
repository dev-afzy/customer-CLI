#!/usr/bin/env node
const program = require('commander')
const { prompt } = require('inquirer')

const {
  addCustomer,
  findCustomer,
  updatecustomer,
  removecustomer,
  listcustomer
} = require('./index')

// Questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Enter the first name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Enter the last name'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the email id '
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Enter the phone number'
  }
]

program
  .version('1.0.0')
  .description('Customer CLI')

// Add new customer
program
  .command('add')
  .alias('a')
  .description('Add a new custromer')
  .action(() => {
    prompt(questions).then(user => addCustomer(user))
  })

// Find an User
program
  .command('find <name>')
  .alias('f')
  .description('to find users')
  .action((name) => findCustomer(name))

// Update customer
program
  .command('update <_id>')
  .alias('u')
  .description('Update a custromer')
  .action((_id) => {
    prompt(questions).then(user => updatecustomer(_id, user))
  })

// Delete customer
program
  .command('delete <_id>')
  .alias('d')
  .description('delete a custromer')
  .action((_id) => removecustomer(_id))

// List customer
program
  .command('list')
  .alias('l')
  .description('delete a custromer')
  .action(() => listcustomer())

program.parse(process.argv)
