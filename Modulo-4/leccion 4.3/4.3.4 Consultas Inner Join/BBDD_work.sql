CREATE DATABASE work;
USE work;

CREATE TABLE departments (
    idDeparment INT auto_increment PRIMARY key,
    name VARCHAR(50),
    location VARCHAR(50)
);
CREATE TABLE employees (
    idEmployee INT AUTO_INCREMENT primary key,
    name VARCHAR(20),
    lastname VARCHAR(20),
    email VARCHAR(50),
    fkDepartment INT,
    FOREIGN KEY (fkDepartment) REFERENCES departments (idDeparment)
);
    
INSERT INTO  departments (name, location)
VALUES ("Accounting","Sevilla"),
       ("Software development","Vigo"),
       ("Marketing","Bilbao");

INSERT INTO  employees (name,lastname,email,fkDepartment)
VALUES ("María","Ruiz","maria@gmail.com",1),
       ("Lucía","Ramírez","lucia@hotmail.com",2),
       ("Sofia","Gomes","sofia@yahoo.com",3),
       ("Ana","Sánchez","ana@yahoo.com",3),
       ("Victoria","Roldan","victoria@yahoo.com",2);

SELECT employees.idEmployee AS IDemployees, employees.name AS Name, departments.name AS Department, departments.location AS Location
FROM employees, departments
WHERE employees.fkDepartment = departments.idDeparment;

CREATE TABLE proyects (
	idProyect INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(200)
);

CREATE TABLE employees_proyects (
  fkEmployees INT,
  FOREIGN KEY (fkEmployees) REFERENCES employees (idEmployee),
  fkProyects INT,
  FOREIGN KEY (fkProyects) REFERENCES proyects (idProyect)
);



INSERT INTO proyects ( name, description)
VALUES ("Proyecto 1", "Esta es la descripción del proyecto 1"),
("Proyecto 2", "Esta es la descripción del proyecto 2"),
("Proyecto 3", "Esta es la descripción del proyecto 3");


INSERT INTO employees_proyects (fkEmployees, fkProyects)
VALUES (1,1),
(1,2),
(2,3),
(3,1),
(3,3),
(4,1),
(4,3),
(5,1),
(5,2),
(5,3);

SELECT employees.name AS Nombre, proyects.name AS Proyecto
FROM employees, proyects, employees_proyects
WHERE employees_proyects.fkEmployees = employees.idEmployee AND proyects.idProyect = employees_proyects.fkProyects AND employees.idEmployee = 3;

SELECT employees.name AS Nombre, departments.name AS Departamento, proyects.name AS Proyecto
FROM employees, proyects, employees_proyects, departments
WHERE employees_proyects.fkEmployees = employees.idEmployee AND proyects.idProyect = employees_proyects.fkProyects AND employees.fkDepartment = departments.idDeparment AND employees.idEmployee = 2;


CREATE TABLE country (
    idCountry INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);
CREATE TABLE employees_country (
    idEmployees_country INT AUTO_INCREMENT PRIMARY KEY,
	fkCountry INT,
    fkEmployees INT,
    FOREIGN KEY (fkCountry) REFERENCES country (idCountry),
    FOREIGN KEY (fkEmployees) REFERENCES employees (idEmployee)
);
INSERT INTO  country (name)
VALUES ("España"),("Francia"),("Alemania");

INSERT INTO employees_country (fkCountry,fkEmployees)
VALUES(1,1),(2,3),(3,4),(1,2),(3,5);

SELECT employees.idEmployee, country.name AS pais, employees.name AS empleada
FROM employees
INNER JOIN employees_country
ON employees.idEmployee = employees_country.fkEmployees
INNER JOIN country
ON country.idCountry = employees_country.fkCountry;


SELECT employees.name AS Nombre, employees.lastname AS Apellido, country.name AS País, departments.name AS Departamento
FROM employees
INNER JOIN employees_country
ON employees.idEmployee = employees_country.fkEmployees
INNER JOIN country
ON country.idCountry = employees_country.fkCountry
INNER JOIN departments
ON employees.fkDepartment = departments.idDeparment;


SELECT employees.name AS Nombre, employees.lastname AS Apellido, country.name AS País, departments.name AS Departamento
FROM employees
INNER JOIN employees_country
ON employees.idEmployee = employees_country.fkEmployees
INNER JOIN country
ON country.idCountry = employees_country.fkCountry
INNER JOIN departments
ON employees.fkDepartment = departments.idDeparment;

SELECT employees.name AS Nombre, employees.lastname AS Apellido, country.name AS País, departments.name AS Departamento
FROM employees
INNER JOIN employees_country
ON employees.idEmployee = employees_country.fkEmployees
INNER JOIN country
ON country.name = "España"
INNER JOIN departments
ON departments.name LIKE "%Software%";