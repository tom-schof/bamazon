DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    item_id  INTEGER(4) ZEROFILL NOT NULL,
    product_name VARCHAR(128) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
  
    PRIMARY KEY (item_id)
);


INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "hot dogs", "food", 3.50, 999), (10, "sweater", "clothes", 40.00, 50), (20, "Playstation 4", "electronics", 400, 200), (11, "belt", "clothes", 30, 50), (30, "flashlight", "household", 12, 80), (40, "plates", "kitchen", 12, 100), (2, "Pizza", "food", 10, 20), (50, "shotgun", "guns", 500, 10), (60, "bicycle", "sporting goods", 700, 5), (61, "soccer ball", "sporting goods", 50, 50), (70, "toddler", "children", 800, 20), (80, "toilet paper", "home goods", 5, 50);