import { Template } from 'meteor/templating';
import { Comments } from '../api/comments.js';

import './body.html';

Template.body.helpers({
    comments() {
        return Comments.find({});
    },
});

Template.body.events({
    'submit .new-comment'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        console.log(Comments);

        // Insert a comment into the collection
        Comments.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        target.text.value = '';
    },
});
