const store = require('../store.js')
const config = require('../config')

const gameCreate = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/game',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const gameIndex = function (data) {
  console.log(store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/game',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const gameDelete = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/game/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const gameUpdate = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/game/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
module.exports = {
  gameCreate,
  gameIndex,
  gameDelete,
  gameUpdate
}
