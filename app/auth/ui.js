'use strict'
const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('.cpheader').show()
  $('#change-password-form').show()

  $('header1 text-center').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('.h5').hide()
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')

  $('#sign-in-form').hide()
  $('#sign-up-form').hide()

  $('.header1').hide()
  $('.or1').hide()
  $('.header3').hide()

  $('#update-review').hide()
  $('.cpheader').hide()
  $('header3 text-center').hide()

  $('.upreview').hide()
  $('#update-review').hide()

  $('#change-password-form').show()
  $('#sign-out-button').show()
  $('#index-games').show()
  $('#create-review').show()
  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('#change-password-form').hide()
  $('#update-review').hide()
  $('.cpheader').hide()
  $('header3 text-center').hide()
  $('.upreview').hide()
  $('#update-review').hide()
  $('#sign-out-button').hide()
  $('#index-games').hide()
  $('#create-review').hide()
  $('#delete-review').hide()
  $('#games-display').hide()

  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('.header1').show()
  $('.header3').show()

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Your password has been successfully changed!</p>')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing your password.</p>')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
