DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    item_id ZEROFILL INTEGER(8) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(128) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
  
    PRIMARY KEY (item_id)
)

INSERT INTO PRODUCT(product_name, department_name, price, stock_quantity)
VALUES ("hot dogs", "food", 3.50, 999), ("sweater", "clothes", 40.00, 50), ("Playstation 4", "electronics", 400, 200), ("belt", "clothes", 30, 50), ("flashlight", "household", 12, 80), ("plates", "kitchen", 12, 100), ("Pizza", "food", 10, 20), ("shotgun", "guns", 500, 10), ("bicycle", "sporting goods", 700, 5), ("soccer ball", "sporting goods", 50, 50), ("toddler", "children", 800, 20), ("toilet paper", "home goods", 5, 50);