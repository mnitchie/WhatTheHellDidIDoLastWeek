import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		githubLogin() {
			this.get('session').open('github-oauth2').then((something) => {
				// Any of the following three work
				console.log(this.get('session.githubToken'));
				console.log(this.get('session.githubToken'));
				console.log(this.get('session').get('githubToken'));
			});
		}
	}
});
