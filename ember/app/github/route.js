import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		githubLogin() {
			this.get('session').open('github-oauth2').then((something) => {
				// Any of the following three work
				console.log(this.get('session.githubToken'));
				console.log(this.get('session.githubToken'));
				console.log(this.get('session').get('githubToken'));
				this.transitionTo('github.activity');
			});
		}
	}
});

/*
https://api.github.com/user/repos?access_token=43c25f86a780079100741bad256145903eef6f19
*/