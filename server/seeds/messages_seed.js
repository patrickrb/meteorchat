if (Messages.find().count() === 0){
	Messages.insert({
		avatarUrl: "http://graph.facebook.com/burnsoft/picture?type=large",
		userName: "chausage pizza",
		time: "now",
		message: "this is a seeded message"
	});

	Messages.insert({
		avatarUrl: "http://graph.facebook.com/burnsoft/picture?type=large",
		userName: "asdfasdfasdf ",
		time: "10 minutes ago",
		message: "this is another seeded message"
	});
}