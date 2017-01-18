Meteor.methods

	userFirstLogin: (token, username, password) ->
		if token
			user = Meteor.users.findOne 'services.password.reset.token': token,
				fields: _id: 1

			username = Validations.trim username
			username = Validations.removeSpecials username
			username = username.toLowerCase username

			if user?
				Accounts.setPassword user._id, password
				Accounts.setUsername user._id, username
				Meteor.users.update user._id, $set: state: 'active'
				done: true
			else
				done: false
		else
			done: false
