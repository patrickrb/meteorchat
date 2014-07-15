Template.userWindow.helpers({
	usersOnline: function(){
		var userData = Meteor.users.find({ "status.online": true }).fetch();
		console.log(userData);
		console.log(userData.profile);
		if(userData.username == null)
			// userData.username = userData.profile.name;
		return userData;
	}
});