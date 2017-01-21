import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
    comments: [
        { text: 'This is comment 1' },
        { text: 'This is comment 2' },
        { text: 'This is comment 3' },
    ],
});
