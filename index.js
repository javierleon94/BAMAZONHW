//nmp connection packages
var mysql = require('mysql');
var inquirer = require('inquirer');

// connection to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: 'root',
	database: "bamazon"
})

console.log("Greetings from B-Amazon!");
//connect to sql and start the products
connection.connect(function(err){
	if (err) throw err;
	console.log("connect as " + connection.threadId);
	start(); 
})

// start promopting
var start = function (){
	inquirer.prompt(
	{
		name: "welcome",
		type: "list",
		message: "Welcome, would you like to shop for the best products?",
		choices: ["YES", "NO"]
	}).then(function(answer) {
		if (answer.welcome.toUpperCase() == "YES"){
			ourProducts();
		}
		else {
			console.log("Goodbye");
			return;
		}
	})
};


var ourProducts = function (){
connection.query('SELECT * FROM products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
    	//showing inventory
        console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + "$" + res[i].price);
    }
    console.log("-----------------------------------");
    // asks the next question ater 2 seconds
    setTimeout(function() {nextAsk();}, 2000);
})
};
 
// asks next to the customer wants
var nextAsk = function (){
	inquirer.prompt([
	{
		name: "productid",
		type: "list",
		message: "Choose the ID of the product you wish to purchase:",
		choices: ["1", "2", "3", "4", "5", "6", "7"]
	},	
	{
		name: "productunits",
		type: "input",
		message: "How many units of this product would you like to puchase?",
		validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
	}]).then(function(answer) {
		console.log("NEXT IS CHECKOUT");
			checkQuantity(answer);
	})
};

// compare product units wanted vs available products
var checkQuantity = function(answer) {
	console.log("Looking For Items");
	var query = 'SELECT stockQuantity, price FROM products WHERE itemID =?';
	var params = answer.productid;

		connection.query(query, params, function(err, res) {
			if ( res[0].stockQuantity < answer.productunits) {
				console.log("Out of Stock");
				nextAsk(1);
			}
			else {
				// calculate the total by pulling the price and multiple by product wanted	
				var total = answer.productunits * res[0].price;
				var newQuantity = res[0].stockQuantity-answer.quantity;
				
				console.log("Total Cost: $" + total);

				connection.query("UPDATE `products` SET stockQuantity = (stockQuantity - ?) WHERE id = ?;", [answer.productunits, answer.productid], function(err, res){
					
						console.log("Your purchase is complete. $" + total);
					});
				
				}
		});

	
			setTimeout(function(){
				console.log("Thanks for your money!!");
			},3000);
	
	
};


	

	






