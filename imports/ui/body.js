import { Template } from 'meteor/templating';
import { Comments } from '../api/comments.js';

import './body.html';
/* 見た目のあれこれ */
$(document).ready(function(){
    $('.text-comment').autosize({append: null});
})

/* コメント投稿 */

Template.body.helpers({
    comments() {
        return Comments.find({});
    },
});

Template.body.events({
    'submit form'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const textarea = $('.text-comment').val();

        // Insert a comment into the collection
        Comments.insert({
            textarea,
            createdAt: new Date(), // current time
        });

        // Clear form
        $('.text-comment').val('');
    },
});
