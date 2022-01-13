import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from './ContactsCollection.js';

Meteor.publish('allContacts', function publishContacts() {
    return ContactsCollection.find();
});