Meteor.subscribe('messages');

Meteor.subscribe('userStatus');

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});