Shops.allow({
		insert:function(){
			return true;	
				}
	})

// Shops.allow({
// 		insert:function(userId, doc){
// 			return userId && doc.user == userId;	
// 				}
// 	})

// User.allow({
// 		insert:function(){
// 			return true;
// 		}
// })

Specials.allow({
		insert:function(){
			return true;
		}
})