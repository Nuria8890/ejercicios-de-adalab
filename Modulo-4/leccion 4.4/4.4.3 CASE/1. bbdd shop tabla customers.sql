CREATE DATABASE shop;
USE shop;

CREATE TABLE customers(
	customer_number INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(45) NOT NULL,
    contact_last_name VARCHAR(45) NOT NULL,
    contact_first_name VARCHAR(45) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    address_line1 VARCHAR(100) NOT NULL,
    address_line2 VARCHAR(100),
    city VARCHAR(45) NOT NULL,
    state VARCHAR(45),
    postal_code VARCHAR(12) NOT NULL,
    country VARCHAR(45) NOT NULL,
    sales_rep_employee_number INT NOT NULL,
    credit_limit FLOAT NOT NULL    
);

INSERT INTO customers (customer_name, contact_last_name, contact_first_name, phone, address_line1, city, state, postal_code, country, sales_rep_employee_number, credit_limit)
VALUES
	("Tech Solutions", "Pérez", "Juan", "555-01-23-45", "Calle Falsa 123", "Springfield", "IL", "62701", "Estados Unidos", "1014", 15000.50),
    ("Innovatech", "Gómez", "Ana", "555-04-56-78", "Avenida Siempre Viva 742", "Ciudad Gótica", "NY", "10001", "Estados Unidos", "1009", 25000.75),
    ("EcoFriendly Co.", "López", "Carlos", "555-07-89-12", "Calle Verde 456", "Metropolis", "CA", "90001", "México", "1003", 18060.75),
	("Quantum Dynamics", "Morales", "Andrés", "555-08-09-01", "Calle Cuántica 876", "Ciudad de México", "DF", "01000", "México", "1009", 26600.60),
    ("Infinity Group", "Cordero", "Esteban", "555-09-12-54", "Calle Infinito 654", "Ciudad de México", "DF", "01000", "México", "1009", 30000);
    

INSERT INTO customers (customer_name, contact_last_name, contact_first_name, phone, address_line1, city, postal_code, country, sales_rep_employee_number, credit_limit)
VALUES
	("Global Enterprises", "Martínez", "Carla", "555-02-32-45", "Paseo de la Reforma 789", "Madrid", "28001", "España", "1323", 22000.25),
   	('Future Tech', 'Rodríguez', 'Miguel', '555-0678', 'Calle del Futuro 321', 'Buenos Aires', '1000', 'Argentina', 1014, 30000.00),
	('Creative Minds', 'Fernández', 'Sofía', '555-0912', 'Calle Imaginación 654', 'Málaga', '10115', 'España', 1323, 17500.80),
	('Apex Innovations', 'Torres', 'Javier', '555-0234', 'Avenida de la Innovación 987', 'Lisboa', '1000', 'Portugal', 1009, 21000.90),
	('Bright Future', 'Castro', 'Elena', '555-0567', 'Calle del Sol 234', 'Santiago', '8320000', 'Chile', 1014, 19500.40),
	('Stellar Solutions', 'Jiménez', 'Patricia', '555-0123', 'Calle Estelar 543', 'Barcelona', '111 22', 'España', 1323, 23000.00),
	('Horizon Technologies', 'Ríos', 'Fernando', '555-0456', 'Avenida del Horizonte 321', 'Madrid', '100-0001', 'España', 1323, 19000.30),
	('Visionary Concepts', 'Delgado', 'Mariana', '555-0789', 'Calle de la Visión 654', 'París', '75001', 'Francia', 1323, 17000.20),
	('Synergy Corp', 'Herrera', 'Roberto', '555-0345', 'Calle Sinergia 987', 'Roma', '00100', 'Italia', 1323, 24000.10),
	('Nexus Industries', 'Salazar', 'Gabriela', '555-0678', 'Avenida del Nexus 321', 'Nueva Delhi', '110001', 'India', 1014, 20000.00);
    
SELECT * FROM customers;
    
-- Realiza una consulta SELECT que obtenga el número identificativo de cliente más bajo de la base de datos.

SELECT MIN(customer_number)
FROM customers;
    
-- Selecciona el limite de crédito medio para los clientes de España.

SELECT AVG(credit_limit)
FROM customers
WHERE country = "España";

-- Selecciona el número de clientes en Estados Unidos.

SELECT COUNT(country)
FROM customers
WHERE country = "Estados Unidos";

-- Selecciona el máximo de crédito que tiene cualquiera de los clientes del empleado con número 1323

SELECT MAX(credit_limit)
FROM customers
WHERE sales_rep_employee_number = 1323;

-- ¿Cuál es el número máximo de empleado de la tabla customers?
SELECT MAX(sales_rep_employee_number)
FROM customers;

-- GROUP BY HAVING

-- Selecciona el número de clientes en cada país.
SELECT country AS País, COUNT(country) AS NúmeroDeEmpleados
FROM customers
GROUP BY country;

-- Total de crédito otorgado por empleado de ventas
SELECT sales_rep_employee_number AS Nº_Empleado, SUM(credit_limit) AS Total_de_Crédito
FROM customers
GROUP BY sales_rep_employee_number;

-- Promedio de límite de crédito por país
SELECT country AS País, AVG(credit_limit) AS Promedio_de_Crédito
FROM customers
GROUP BY country;

-- Total de crédito otorgado por ciudad
SELECT city AS Ciudad, SUM(credit_limit) AS Total_de_Crédito
FROM customers
GROUP BY city;

-- Clientes con límite de crédito superior a 20000
SELECT credit_limit AS Límite_de_Crédito, (COUNT(credit_limit)) AS Número_Clientes
FROM customers
GROUP BY credit_limit
HAVING credit_limit >= 20000;

-- Empleados de ventas con más de 3 clientes asignados
SELECT sales_rep_employee_number AS Empleado, COUNT(sales_rep_employee_number) AS Número_Clientes_Asignados
FROM customers
GROUP BY sales_rep_employee_number
HAVING COUNT(sales_rep_employee_number) > 3;

-- Países con más de 2 clientes
SELECT country AS País, COUNT(country) AS Número_Clientes_por_País
FROM customers
GROUP BY country
HAVING COUNT(country) > 2;

-- Ciudades donde el total de crédito otorgado supere los 20000
SELECT city AS Ciudad, COUNT(city) AS Número_de_empresas_por_Ciudad
FROM customers
GROUP BY city
HAVING SUM(credit_limit) > 30000;

-- Identificación de clientes con nombres largos o cortos (si tienen mas de 10 caracteres es Largo) busca la función length
SELECT customer_name AS Nombre_Cliente,
CASE
    WHEN length(customer_name) <= 10  THEN "Corto"
    WHEN length(customer_name) >= 15 THEN "Largo"
    ELSE "Normal"
    END AS Tipo_de_Nombre
FROM customers;

-- Categorización de clientes según su país de origen (España-> nacional, otro--> internacional)
SELECT customer_name AS Nombre_Cliente,
CASE
    WHEN country = "España" THEN "Nacional"
    ELSE "Internacional"
    END AS Origen
FROM customers;

-- Clasificación de clientes según el nombre de la ciudad (Madrid-> ciudad grande, Barcelona -> ciudad grande, Cuenca -> ciudad pequeña, Vigo -> ciudad pequeña)
SELECT customer_name AS Nombre_Cliente,
CASE
    WHEN city = "Madrid" OR city = "Barcelona" OR city = "Ciudad de México" OR city = "Buenos Aires" THEN "Ciudad grande"
    ELSE "Ciudad pequeña"
    END AS Ciudad
FROM customers;

SELECT city FROM customers;