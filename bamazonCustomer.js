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
});

// Prompt Message to the customer

var cart = function() {
    console.log(table.toString());
    inquirer.prompt([{
        name: 'id',
        type: 'prompt',
        message: "To make a purchase, please select the product's ID number"
    }, {
        name: "stock",
        type: 'prompt',
        message: "How many would you like to order?"
    }]);
};
