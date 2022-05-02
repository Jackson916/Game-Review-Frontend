'use strict'
const store = require('../store.js')

const onCreateGameSuccess = function () {
  $('#games-display').html('<p>GAME ADDED TO COLLECTION</p>')

  $('.upreview').show()
  $('#update-review').show()

  $('form').trigger('reset')
}

const onCreateGameFailure = function () {
  $('#games-display').html('<p>Error while creating game</p>')
}

const onIndexSuccess = function (response) {
  const game = response.game

  let gameHtml = ''

  game.forEach((game) => {
    gameHtml += `
        <p>ID: ${game._id}</p>
        <h4>Title: ${game.title}</h4>
        <p>Description: ${game.description}</p>
        <p>Rating: ${game.rating}</p>
      `
  })

  $('#games-display').html(gameHtml)
  $('#update-review').show()
  $('#delete-review').show()
}
const onIndexFailure = function () {
  $('#games-display').html('<p>Index Failed</p>')
}

const onUpdateGameSuccess = function (response) {
  $('#games-display').html('<p>Game updated successfully</p>')

  $('form').trigger('reset')

  store.user = response.user
}

const onUpdateGameFailure = function () {
  $('#games-display').html()
}
const onDeleteGameSuccess = function () {
  $('#games-display').html('<p>Game successfully</p>')

  $('form').trigger('reset')
}

const onDeleteGameFailure = function () {
  $('#games-display').html('<p>Could not delete game!</p>')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure
}
