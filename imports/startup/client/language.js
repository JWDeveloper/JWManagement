import { Meteor } from 'meteor/meteor';
import moment from 'moment';

Meteor.startup(() => {
  Tracker.autorun((tracker) => {
    if (Meteor.user() != null) {
      tracker.stop();

      const language = FlowRouter.current().params.language;
      const myLanguage = Meteor.user().profile.language;

      if (language != myLanguage) {
        FlowRouter.withReplaceState(() => {
          FlowRouter.setParams({ language: myLanguage });
        });
      }

      if (TAPi18n.getLanguage() != myLanguage) {
        TAPi18n.setLanguage(myLanguage);
        moment.locale(myLanguage);
      }
    }
  });
});