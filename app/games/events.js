'use strict'

const gamesUi = require('./ui.js')

const gamesApi = require('./api.js')

const getFormFields = require('../../lib/get-form-fields.js')

const onCreateGames = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  gamesApi
    .gamesCreate(data)
    .then(() => gamesUi.onCreateGamesSuccess())
    .catch(() => gamesUi.onCreateGamesFailure())
}

const onUpdateGames = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  gamesApi
    .gamesUpdate(data)
    .then((response) => gamesUi.onUpdateGamesSuccess(response))
    .catch(() => gamesUi.onUpdateGamesFailure())
}
const onDeleteGames = function () {
  gamesApi
    .gamesDelete()
    .then(() => gamesUi.onDeleteGamesSuccess())
    .catch(() => gamesUi.onDeleteGamesFailure())
}

module.exports = {
  onCreateGames,
  onUpdateGames,
  onDeleteGames
}
