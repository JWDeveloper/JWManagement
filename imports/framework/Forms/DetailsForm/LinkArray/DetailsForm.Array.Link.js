import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { getValue, isType, loadData } from '/imports/framework/Forms/DetailsForm/DetailsForm.Helpers';

import './DetailsForm.Array.Link.jade';

Template.DetailsFormArrayLink.helpers({
  getValue,
  isType
});

Template.DetailsFormArrayLink.onCreated(() => {});

Template.DetailsFormArrayLink.onRendered(() => {});

Template.DetailsFormArrayLink.onDestroyed(() => {});

Template.DetailsFormArrayLink.events({
  'click .input.array-item': (e) => {
    e.stopPropagation();

    const data = Template.currentData();
    const type = data.definition.action.type;
    const entityId = data.entity._id;
    let params = FlowRouter.current().params;

    if (type == 'route') {
      const key = data.definition.key;
      const route = data.definition.action.route;

      params[key + 'Id'] = entityId;

      FlowRouter.go(FlowRouter.path(route, params));
    }
    else if (type == 'method') {
      const method = data.definition.action.method;
      const detailsForm = data.parentInstance;

      let messagePathParts = method.split('.');
      messagePathParts.pop();
      messagePathParts.splice(1, 0, 'entity');
      messagePathParts.push('methodConfirmation');

      const deleteConfirmationMessage = TAPi18n.__(messagePathParts.join('.').replace(/_/g, '.'));

      if (confirm(deleteConfirmationMessage)) {
        Meteor.call(method, params, entityId, (error) => {
          if (error) {
            alert('SERVER ERROR');
          } else {
            loadData(detailsForm);
          }
        });
      }
    }
  }
});