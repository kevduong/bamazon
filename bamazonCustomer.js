var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var chalk = require('chalk');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;

});

// Formatting the table using chalk and cli-table
var table = new Table({
    head: [
        chalk.bgCyan('Welcome to the Uncle Bamazon Store!'),
        chalk.cyan('Products'),
        chalk.cyan('Department'),
        chalk.green('Price'),
    ],
    chars: {
        'top': '═',
        'top-mid': '╤',
        'top-left': '╔',
        'top-right': '╗',
        'bottom': '═',
        'bottom-mid': '╧',
        'bottom-left': '╚',
        'bottom-right': '╝',
        'left': '║',
        'left-mid': '╟',
        'mid': '─',
        'mid-mid': '┼',
        'right': '║',
        'right-mid': '╢',
        'middle': '│'
    }
});
return connection.query("SELECT item_id, product_name, department_name, price FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
        table.push([
            res[i].item_id,
            res[i].product_name,
            res[i].department_name,
            '$' + res[i].price
        ]);
    }
    console.log(table.toString());
    checkOut();
});

//The app should then prompt users with two messages.
  // The first should ask them the ID of the product they would like to buy.
  // The second message should ask how many units of the product they would like to buy.
function checkOut() {
  var query = "SELECT * FROM products WHERE ?";
    inquirer.prompt([
      {
        name: 'id',
        type: 'list',
        message: "To make a purchase, please select the product's ID number",
        choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    {
      name: 'stock',
      type: 'input',
      message: "How many would you like to purchase?"
    }
  ]).then(function(answer){
    connection.query(query, {id: answer.item_id}, function (err, res){
        var item = res[0].product_name;
        var inventory = parseInt(res[0].stock_quanity);
        var cart = parseInt(answer.stock);
        var amount = parseInt(res[0].price);
          if (cart>inventory) {
            console.log('Sorry! We do not have sufficient stock.');
          } else {
            var updateStock = inventory-cart;
            var totalPrice = cart*price;
            connection.query('UPDATE products SET ? WHERE ?', [{stock_quanity: updateStock}], {id: answer.item_id}, function(err,res){
            });
            console.log('Total: $'+totalPrice);
          }
    });
  });
}
