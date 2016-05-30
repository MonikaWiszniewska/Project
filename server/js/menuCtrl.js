angular.module('myapp').controller('MenuCtrl', function ($scope, menu, ingredients) {
	
	$scope.cartTotal = 0;
	var cartVisible = false;
	
	$scope.initializeView = function initializeView() {
		var location = window.location.hash;
		if (location === '#/main'
				|| location === '#/finalizeorder'
				|| sessionStorage.cart === undefined) {
			
			$("#showHideCart").html('Pokaż koszyk');
			cartVisible = false;
			$(".cart").hide();
			
		} else {
			if (sessionStorage.cart !== undefined && sessionStorage.cart.length > 0) {
				$("#showHideCart").html('Ukryj koszyk');
				cartVisible = true;
				$(".cart").show();
			}
    	}
    }
	
	$scope.initializeView();
	
	menu.getItems().then(function (data) {
       $scope.Menu = data.data; 
    });
    
    ingredients.getIngredients().then(function(data) {
    	$scope.Ingredients = data.data;
    });
    
    $scope.recalculateTotal = function() {
    	var total = 0;
    	for (var i = 0; i < $scope.Cart.length; i++) {
    		var item = $scope.Cart[i];
    		total += item.subPrice;
    	}
    	$scope.cartTotal = Math.round(total * 100) / 100;
    }
    
    if (sessionStorage.cart !== undefined) {
    	$scope.Cart = JSON.parse(sessionStorage.cart);
    	$scope.recalculateTotal();
    }
    
    
    $scope.initializeCart = function() {
    	if (sessionStorage.cart === undefined) {
    		var cart = [];
    		sessionStorage.cart = JSON.stringify(cart);
    	}
    };
    
    $scope.clearCart = function() {
    	var cart = [];
    	sessionStorage.cart = JSON.stringify(cart);
    	$scope.Cart = cart;
    	location.reload();
    };
    
    $scope.getItemById = function(item_id) {
    	if ($scope.Menu !== undefined) {
	    	for (var i = 0; i < $scope.Menu.length; i++) {
	    		var item = $scope.Menu[i];
	    		if (item.id == item_id) {
	    			return item;
	    		}
	    	}
    	}
    	return null;
    }
    
    $scope.addItem = function(item_id) {
    	
    	$scope.initializeCart();
    	
    	var cart = JSON.parse(sessionStorage.cart);
    	
		var found = false;
		for (var i = 0; i < cart.length; i++) {
			var entry = cart[i];
			if (entry !== null) {
				if (entry.id === item_id) {
    				var count = entry.count;
    				var newCount = count + 1;
    				var newItem = $scope.getItemById(item_id);
    				var obj = {
    					id: entry.id,
    					item: newItem,
    					subPrice:  Math.round(newItem.price * newCount * 100) / 100,
    					count: newCount
    				};
    				cart[i] = obj;
    				found = true;
    				break;
				}
			}
		}
    	if (!found) {
    		var newItem =  $scope.getItemById(item_id)
    		cart.push({
    			id: item_id,
    			item: newItem,
    			subPrice: newItem.price,
    			count: 1
    		});
    	}
    	sessionStorage.cart = JSON.stringify(cart);
    	
    	$scope.Cart = cart;
    	location.reload();
    	
    };
    
    $scope.deleteItem = function(item_id) {
    	
    	var cart = JSON.parse(sessionStorage.cart);
    	for (var i = 0; i < cart.length; i++) {
    		var item = cart[i];
    		if (item.id == item_id) {
    			cart.splice(i, 1);
    		}
    	}
    	
    	sessionStorage.cart = JSON.stringify(cart);
    	$scope.Cart = cart;
    	location.reload();
    	
    };
    
    $scope.decrement = function(item_id) {
    	
    	var cart = JSON.parse(sessionStorage.cart);
    	    	
    	for (var i = 0; i < cart.length; i++) {
			var entry = cart[i];
			if (entry !== null) {
				if (entry.id === item_id) {
    				var count = entry.count;
    				var newCount = count;
    				if (newCount > 1) {
    					newCount = newCount -1;
    				} else {
    					$scope.deleteItem(item_id);
    					return;
    				}
    				var newItem = $scope.getItemById(item_id);
    				var obj = {
    					id: entry.id,
    					item: newItem,
    					subPrice: Math.round(newItem.price * newCount * 100) / 100,
    					count: newCount
    				};
    				cart[i] = obj;
    				sessionStorage.cart = JSON.stringify(cart);
    		    	$scope.Cart = cart;
    		    	location.reload();
				}
			}
		}
    };
    
    
    
    $( "#showHideCart" ).click(function() {
		if(cartVisible) {
			$( ".cart" ).hide();
			$("#showHideCart").html('Pokaż koszyk');
			cartVisible = false;
		} else {
			$( ".cart" ).show();
			$("#showHideCart").html('Ukryj koszyk');
			cartVisible = true;
		}
	});
    
    $( "#clearCart" ).click(function() {
		$scope.clearCart();
	});

})
