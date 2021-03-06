import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('github', function() {
    this.route('activity');
  });
  this.route('gmail');
  this.route('trello');
  this.route('slack');
});

export default Router;
