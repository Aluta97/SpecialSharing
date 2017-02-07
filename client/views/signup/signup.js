Template.signup.events({
    'submit form': function(event){

         event.preventDefault();

        var name = $('[name=name]').val();
        var username = $('[name=username]').val();
        var city = $('[name=city]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        //insert a singup user into the users collection
    	Accounts.createUser({
    		profile :{
    			name: name,
    			city: city
    		},
    		  username: username,
			    email: email,
          password: password
          // user: Meteor.userId()
        });

    	//clear form
        Router.go('login');
    }
});
