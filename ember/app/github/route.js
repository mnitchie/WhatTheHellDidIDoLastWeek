import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),

	actions: {
		githubLogin() {
			this.get('torii').open('github-oauth2').then((authorization) => {
				Ember.$.getJSON('/api?code=' + authorization.authorizationCode).then(function(data) {
					console.log(data);
				});
			});
		}
	}
});
