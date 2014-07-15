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


Template.chatWindow.rendered = function ( ) { 
	console.log('page ready');

	//scroll the chat window to the bottom
	$(".panel-body").animate({ scrollTop: $('.panel-body')[0].scrollHeight}, 1000);
};

Meteor.submitMessage = function(){
	var message = {
		user_id: Meteor.user()._id,
		avatarUrl: Meteor.user().avatarUrl,
		username: Meteor.user().username,
		message: $('#message').val(),
		time: Date.now()
	}
	message._id = Messages.insert(message);
	$(".panel-body").animate({ scrollTop: $('.panel-body')[0].scrollHeight}, 1000);
	$('#message').val('');
}