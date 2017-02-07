Meteor.methods({
  checkShop:function(name){
    //check if the shop exits on the database
      var shop = Shops.findOne({
        // console.log();
        name:name
      })
      console.log(shop);
  //if the shop exist return the id of the shop
  if(shop){
    return shop._id;
  }
  //if it doesnt exist insert it and return its id
  else{
  var id =  Shops.insert({
      name:name
    })
    return id;
  }
}
});
