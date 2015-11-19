import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),

	actions: {
		/*githubLogin() {
			/*this.get('session').authenticate('authenticator:torii', 'github-oauth2').then((what) => {
				console.log(what);
				debugger;
			});*/
			
			this.get('torii').open('github-oauth2').then((authorization) => {
				console.log(authorization);
				Ember.$.ajax({
					type: 'POST',
					url: 'https://github.com/login/oauth/access_token',
					data: {
						client_id: '',
						client_secret: '',
						code: authorization.authorizationCode,
						accept: 'application/json'
					},
					success: function(data, textStatus, jqXHR) {
						debugger;
					},
					error: function() {
						debugger;
					}
				})
			});
		}*/
	}
});
