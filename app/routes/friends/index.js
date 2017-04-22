import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('friend'); // go to store and find all 'friend' models. To call this data fetch, I can refer to "model" from template
  }
});
