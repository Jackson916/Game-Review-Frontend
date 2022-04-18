'use strict'
const store = require('../store.js')

const onCreateGamesSuccess = function () {
  $('#auth-display').html('<p>Game created successfully</p>')

  $('#sign-up-form').trigger('reset')
}

const onCreateGamesFailure = function () {
  $('#auth-display').html('<p>Error while creating game</p>')
}

const onUpdateGamesSuccess = function (response) {
  $('#auth-display').html('<p>Game updated successfully</p>')

  store.user = response.user
}

const onUpdateGamesFailure = function () {
  $('#auth-display').html('<p>Error while updating game</p>')
}
const onDeleteGamesSuccess = function () {
  $('#auth-display').html('<p>Game successfully</p>')

  $('form').trigger('reset')
}

const onDeleteGamesFailure = function () {
  // $('#auth-display').html('<p>Cannot delete game</p>')
}

module.exports = {
  onCreateGamesSuccess,
  onCreateGamesFailure,
  onUpdateGamesSuccess,
  onUpdateGamesFailure,
  onDeleteGamesSuccess,
  onDeleteGamesFailure
}
