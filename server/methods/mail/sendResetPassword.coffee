import i18next from 'i18next'

Meteor.methods

	sendResetPassword: (obj) ->
		check obj, Object
		check obj.email, String

		if obj.email == ''
			throw new Meteor.Error 500, 'Email not set'

		token = Random.id 43
		user = {}
		find = 'profile.email': obj.email.toLowerCase()

		if obj.username?
			find['username'] = obj.username

		users = Meteor.users.find(find).fetch()

		if users.length == 0
			throw new Meteor.Error 404, ''
		else if users.length > 1
			throw new Meteor.Error 420, ''
		else
			user = users[0]

		if user.services? && user.services.password? && user.services.password.reset? && user.services.password.reset.token
			token = user.services.password.reset.token
		else
			Meteor.users.update find, $set: 'services.password.reset': token: token

		localTranslate = i18next.getFixedT(user.profile.language)

		try
			Meteor.call 'sendMail',
				recipient: obj.email
				sender: 'JW Management'
				from: 'support@jwmanagement.org'
				subject: localTranslate('mail.resetPassword.subject')
				template: 'resetPassword'
				language: user.profile.language
				data:
					token: token
					language: user.profile.language
					content: getMailTexts 'resetPassword', localTranslate
		catch e
			console.error e
