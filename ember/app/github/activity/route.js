import Ember from 'ember';

var RepoItem = Ember.Object.extend({
	id: '',
	name: '',
	fullName: '',
	commits: []
});

var CommitItem = Ember.Object.extend({
	id: '',
	message: ''
});

export default Ember.Route.extend({
	model() {
		const repos = [];

		return Ember.$.getJSON("https://api.github.com/user/repos?access_token=" + this.get('session.githubToken')).then((gitRepos) => {
			const commitPromises = [];

			gitRepos.forEach((itemm, index) => {
				const item = RepoItem.create({
					id: itemm.id,
					name: itemm.name,
					fullName: itemm.full_name
				});

				repos.push(item);
				const commitPromise = Ember.$.getJSON("https://api.github.com/repos/" + item.get('fullName') + '/commits?access_token=' + this.get('session.githubToken') + '&author=nitchie@careevolution.com&since=2015-11-12T23:42:03-05:00').then((commits) => {
					const commitItems = [];

					commits.forEach((item, index) => {
						commitItems.push(CommitItem.create({
							id: item.id,
							message: item.commit.message
						}))
					});

					item.set('commits', commitItems);
				});

				commitPromises.push(commitPromise);
			});

			return Ember.RSVP.all(commitPromises).then(() => {
				return repos;
			});
		});
	}
});
