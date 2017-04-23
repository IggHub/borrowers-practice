import Ember from 'ember';

export default Ember.Controller.extend({
  isAwesome: true,
  actions: {
    save(model){
      console.log("Save it! (Controller)");
      this.transitionToRoute('friends.show', model);
    },
    cancel(){
      console.log("Cancel it... (Controller)");
    }
  }
});
