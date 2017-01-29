const auth = Meteor.settings.auth;

const basicAuth = new HttpBasicAuth(auth.username, auth.password);
basicAuth.protect();
