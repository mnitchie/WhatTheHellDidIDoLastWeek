import Ember from 'ember';

export default Ember.Object.extend({
	open: function(authorization) {
		alert("In open");
		return Ember.$.getJSON('/api?code=' + authorization.authorizationCode).then((token) => {
			alert("getJson won");
			return {
				githubToken: token.token
			}
		}, (reason) => {
			alert("Rejected");
		});
	}
});