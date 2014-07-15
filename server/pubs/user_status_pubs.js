Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});

Accounts.onCreateUser(function(options, user) {
	console.log('creating account');
	if(user.services.facebook){
	    if (options.profile) {
	        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
	        user.profile = options.profile;
	        user.username = user.services.facebook.name;
	        user.avatarUrl = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
	    }
	}
    return user;
});