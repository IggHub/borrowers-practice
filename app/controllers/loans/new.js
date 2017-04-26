import Ember from 'ember';

export default Ember.Controller.extend({
  backToIndex: function(){
    this.transitionToRoute('loans.index', friend);
  }
});
