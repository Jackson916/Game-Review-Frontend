'use strict'
const config = require('../config.js')
const store = require('../store.js')

const gamesCreate = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data
  })
}

const gamesDelete = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data
  })
}
const gamesUpdate = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  gamesCreate,
  gamesDelete,
  gamesUpdate
}
