'use strict'
const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')
  $('.cpheader').show()
  $('#change-password-form').show()
  $('header1 text-center').hide()
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully</p>')

  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('.header1').hide()
  $('.or1').hide()
  $('.header3').hide()

  $('.cpheader').hide()
  $('header3 text-center').hide()

  $('#create-review').show()
  $('#update-review').show()
  $('#delete-review').show()
  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}
const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Your password has been successfully changed!</p>')

  $('form').trigger('reset')
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
