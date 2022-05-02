// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  $('#create-review').on('submit', gameEvents.onCreateGame)
  $('#update-review').on('submit', gameEvents.onUpdateGame)
  $('#delete-review').on('submit', gameEvents.onDeleteGame)
  $('#index-games').on('click', gameEvents.onIndexGame)

  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('.or2').hide()
  $('.cpheader').hide()
  $('.upreview').hide()
  $('#create-review').hide()
  $('#update-review').hide()
  $('#delete-review').hide()
  $('#index-games').hide()
})
