Template.addShop.events({
  'click .addShop': function(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const name = $("input[name=name]").val();
    const address = $("input[name=address]").val();
    const description = $("input[name=description]").val();
    const special = $("input[name=special]").val();

    // Insert a shop into the collection
    Shops.insert({
        name: name,
        address: address,
        description: description,
        special: special,
        user: Meteor.userId()
    });
    // Clear form
    $("input[name=name]").val("");
    $("input[name=address]").val("");
    $("input[name=description]").val("");
    $("input[name=special]").val("");

    Router.go("shops");
  }
});
