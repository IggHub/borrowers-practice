import Ember from 'ember';

export default Ember.Controller.extend({
  save(model){
    console.log('save called from controllers/articles/new');
  },
  cancel(){
    console.log('cancel called from controllers/articles/new');
  }
});
