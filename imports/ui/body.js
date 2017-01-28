import { Template } from 'meteor/templating';
import { Comments } from '../api/comments.js';

import './body.html';

/* コメント投稿 */
Template.body.helpers({
    comments() {
        return Comments.find({}, { sort: { createdAt: -1 }});
    },
});

Template.body.events({
    'submit form'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const comment = $('.post-comment').val();
        var moment = require("moment");

        // Insert a comment into the collection
        if (comment.length > 0) {
          Comments.insert({
              comment,
              createdAt: moment().format("YYYY-MM-DD HH:mm:ss"), // current time
          });

          // Clear form
          $('.post-comment').val('');
        }
    },
});
