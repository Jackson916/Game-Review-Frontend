'use strict'
const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi
    .gameCreate(data)
    .then(() => gameUi.onCreateGameSuccess())
    .catch(() => gameUi.onCreateGameFailure())
}

const onIndexGame = function (event) {
  event.preventDefault()
  gameApi.gameIndex().then(gameUi.onIndexSuccess)
    .catch(gameUi.onIndexFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  gameApi
    .gameDelete(data.game.id)
    .then(gameUi.onDeleteGameSuccess)
    .then(gameApi.gameIndex)
    .catch(gameUi.onDeleteGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  const id = formData.game.id

  gameApi
    .gameUpdate(id, formData)
    .then(gameUi.onUpdateGameSuccess)
    .catch(gameUi.onUpdateGameFailure)
}

module.exports = {
  onCreateGame,
  onIndexGame,
  onDeleteGame,
  onUpdateGame

}
