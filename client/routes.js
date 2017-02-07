Router.configure({
  layoutTemplate:"base"
})

// Router.onBeforeAction(function(){
//   only:["/"]
//   if(Meteor.userId ===null){
//
//     Router.go("addShop");
//   }
//     this.next();
// })


Router.route("shops",{
  waitOn:function () {
    return this.subscribe("shops");
  }
});

//info for each shop
Router.route("shop",{
  path:"/shop/:_id",
  waitOn:function () {
    return this.subscribe("shop", this.params._id)
  },
  data: function(){
    return Shops.findOne(this.params._id);
  }
});
////////////////////////////////////////////////////////
Router.route("specials", {
  path:"/",
  waitOn:function () {
    return this.subscribe("specials");
  }
});

Router.route("special", {
  path:"/special/:_id",
  waitOn:function(){
    return [this.subscribe("special", this.params._id), this.subscribe("specialStore", this.params._id)];
  },
  data:function(){
    return Specials.findOne(this.params._id);
  }
});
//////////////////////////////////////////////////////////

Router.route("users", {
  waitOn:function(){
    return this.subscribe
  }
});

Router.route("signup");

Router.route("login");

Router.route("addShop");

Router.route("addSpecial");
