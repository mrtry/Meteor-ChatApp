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
        event.preventDefault();

        var moment = require("moment");
        const comment = $('.post-comment').val();
        const tag = comment.match(/Q\./) ? 'question' : '';

        // Insert a comment into the collection
        if (comment.length > 0) {
          Comments.insert({
              comment,
              tag,
              createdAt: moment().format("YYYY-MM-DD HH:mm:ss"), // current time
          });

          // Clear form
          $('.post-comment').val('');
        }
    },
});
