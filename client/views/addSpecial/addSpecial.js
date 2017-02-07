Template.addSpecial.events({
	'click .addSpecial': function(event) {

		event.preventDefault();

	   const item = $("input[name=item]").val();
    
    const price = $("input[name=price]").val();
		const special = $("input[name=special]").val();
		console.log(special);
    const shop = $("input[name=shop]").val();

		//add the method that we created
		Meteor.call("checkShop", shop, function(error, results){
			//inserting the specials onto the Special collection
			Specials.insert({
				item: item,
				price: price,
				special:special,
				shop: shop,
				user: Meteor.userId(),
				shop: results
			})
		})

    //clear form
     $("input[name=item]").val("");
     $("input[name=price]").val("");
		 $("input[name=special]").val("");
     $("input[name=shop]").val("");


     	Router.go("/")
	}
})
