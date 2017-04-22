import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('friend'); //at friends/new, when accessing model, it returns a new-record-creation for 'friend'
  }
});
