Template.shops.helpers({

  shops:function(){
    return Shops.find().fetch();
  }
});
