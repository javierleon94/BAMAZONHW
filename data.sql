USE db_bamazon,
CREATE TABLE products (
  itemID int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  productName varchar(45) NOT NULL,
  departmentName varchar(45) NOT NULL,
  price int(11) NOT NULL,
  stockQuantity int(11) NOT NULL
), ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('iphone', 'Devices', '800', '10');

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('Glass', 'Accessories', '45', '7');

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('GalaxyS8', 'Devices', '750', '20');

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('Ipad', 'Devices', '1000', '11');

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('Medicinal Flowers', 'Medicine', '30', '5');

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('iphone', 'Devices', '800', '10')

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('Gucci Scarf', 'Devices', '800', '10')

