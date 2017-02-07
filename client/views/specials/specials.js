
Template.specials.helpers({

  specials:function(){
    return Specials.find().fetch();
  }
});
