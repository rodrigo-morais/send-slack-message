'use strict'

const { send } = require('./messages')

exports.handler = async (event, context) => {
  try {
    console.log('CALLING.... ', event.message)
    await send(event.message)
  } catch (error) {
    console.log('Error: ' + error)
    return false
  }
}
