

Meteor.publish("shops", function(){
  return Shops.find();
});

Meteor.publish("shop", function(_id){
  return Shops.find({
    _id: _id
  })
});

Meteor.publish("specials", function(){
  return Specials.find();
});

Meteor.publish("special", function(_id){
  return Specials.find({
  	_id: _id
  });
});

Meteor.publish("users", function(){
  return Meteor.users.find();
});

//when we add a special we have to add a store if doesnt exist
Meteor.publish("specialStore", function(_id){
  //returns the specials object
  var special = Specials.find(_id).fetch()[0]
  return Shops.find({
    _id: special.shop
  });
})
