import Ember from 'ember';

export default Ember.Object.extend({
	open: function(authorization) {
		return Ember.$.getJSON('/api?code=' + authorization.authorizationCode).then((token) => {
			return {
				githubToken: token.token
			}
		}, (reason) => {
			alert("Rejected");
		});
	}
});