CREATE database bamazon;

use bamazon;


CREATE TABLE products (
item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL(5,2),
stock_quanity INTEGER(4),
PRIMARY KEY (item_id)
);

SELECT * from products;


INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Macbook Pro", "Electronics", 242.21, 4828);


INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Cleaver Knife", "Kitchen", 21.99, 28);

CREATE database bamazon;

use bamazon;


CREATE TABLE products (
item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL(5,2),
stock_quanity INTEGER(4),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Macbook Pro", "Electronics", 242.21, 4828);


INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Stainless Steel Cleaver Knife", "Kitchen", 21.99, 28);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Cesar Milan's Dog leash", "Pets", 25.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Office chair", "Office", 83.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Samsung Washer", "Home Appliances", 350.10, 80);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Squatty Potty", "Bathroom", 30.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Soylent", "Dietary Supplements", 129.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Power Drill", "Tools", 30.80, 10);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Coffee Maker", "Kitchen", 80, 100);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Asus Monitor", "Electronics", 120.50, 800);


SELECT * from products;
