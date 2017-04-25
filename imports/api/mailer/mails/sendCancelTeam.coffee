import { Projects } from '/imports/api/projects/projects.coffee'
import { Shifts } from '/imports/api/shifts/shifts.coffee'
import { send } from '../send.coffee'
import { getMailTexts } from '../helpers.coffee'

export sendCancelTeam = (shiftId, teamId, message) ->
	shift = Shifts.findOne shiftId
	project = Projects.findOne shift.projectId, fields: name: 1, email: 1

	for team in shift.teams when team._id == teamId
		for participant in team.participants when participant.informed && participant.email?
			user = Meteor.users.findOne participant._id, fields: 'profile.language': 1
			project = Projects.findOne shift.projectId, fields: name: 1, email:1
			date = moment(shift.date, 'YYYYDDDD').format('DD.MM.YYYY')
			time = moment(shift.start, 'Hmm').format('H:mm') + ' - ' +  moment(shift.end, 'Hmm').format('H:mm')
			if message == 'missingParticipant'
				message = TAPi18n.__('mail.teamCancellation.missingParticipant', '', user.profile.language)

			send
				recipient: participant.email
				sender: project.name
				from: project.email
				subject: TAPi18n.__('mail.teamCancellation.subject', '', user.profile.language)
				template: 'teamCancellation'
				language: user.profile.language
				data:
					project: project.name
					team: team.name
					name: participant.name
					reason: message
					text: TAPi18n.__('mail.teamCancellation.text', {date: date, time: time} , user.profile.language)
					content: getMailTexts 'teamCancellation', user.profile.language
			, (err, res) -> if err
				console.log 'sendMail failed: ' + err

			Push.send
				from: project.name
				title: TAPi18n.__('push.teamCancellation.headline', user.profile.language)
				text: TAPi18n.__('push.teamCancellation.text', {date: date, time: time} , user.profile.language)
				query: userId: user._id
