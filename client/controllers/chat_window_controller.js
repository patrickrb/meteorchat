Template.chatWindow.events({
	'click #submitNewMessage': function(event){
		Meteor.submitMessage();
	},

	'keypress input#message': function (evt, template) {
    if (evt.which === 13) {
      // add to database
      Meteor.submitMessage();
    }
}
});

Template.chatWindow.helpers({
	messages: function() {
		return Messages.find();
	}
});


//Execute the following code when the chat window has completed rendering
Template.chatWindow.rendered = function ( ) {
	//scroll the chat window to the bottom
	$(".panel-body").animate({ scrollTop: $('.panel-body')[0].scrollHeight}, 1000);
};


//Function to submit a message to the mongo DB
Meteor.submitMessage = function(){
	var date = new Date(Date.now());
	var message = {
		user_id: Meteor.user()._id,
		avatarUrl: Meteor.user().avatarUrl,
		username: Meteor.user().username,
		message: $('#message').val(),
		time: date
	}
	message._id = Messages.insert(message);
	$(".panel-body").animate({ scrollTop: $('.panel-body')[0].scrollHeight}, 1000);
	$('#message').val('');
}