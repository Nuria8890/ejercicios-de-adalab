// Importar los módulos de NPM que necesito
const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

// Crear el servidor
const server = express();

// Configurar el servidor para que acepte peticiones
server.use(cors());

server.use(express.json({ limit: "25MB" }));

// Establecer y arrancar el puerto de conexión
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Configurar la conexion servidor - bbdd
async function getConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "libreria",
    user: "root",
    password: "root",
  });
  await connection.connect();
  console.log(
    `Conexión establecida con la base de datos ${connection.threadId}`
  );
  return connection;
}

// Programar ficheros estáticos (poner en una carpeta (./public) nuestros ficheros y que el servidor se encargue de mostrarlos)
const staticServerPath = "./public"; // ruta relativa de la raíz del proyecto
server.use(express.static(staticServerPath));

// Endpoints
// Libros ordenados de menor a mayor precio
server.get("/libros/ordenadosPrecio", async (req, res) => {
  let sql = `SELECT * FROM libros
              ORDER BY precio ASC;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// Libros con precio superior a 14 €
server.get("/libros/mayor5euros", async (req, res) => {
  let sql = `SELECT * FROM libros
              WHERE precio > 14;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// Libros en stock
server.get("/libros/stock", async (req, res) => {
  let sql = `SELECT * FROM libros
              WHERE stock != 0;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// Libros físicos y en stock
server.get("/libros/fisicoYstock", async (req, res) => {
  let sql = `SELECT * FROM libros
              WHERE stock != 0 AND tipo = 1;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// El libro con id = 1
server.get("/libros/id1", async (req, res) => {
  let sql = `SELECT * FROM libros
              WHERE idLibro = 1;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// 3 primeros libros ordenados alfabéticamente por nombre
server.get("/libros/3primeros", async (req, res) => {
  let sql = `SELECT * FROM libros
              ORDER BY titulo ASC
              LIMIT 3;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// 3 libros siguientes después del 3º ordenados alfabéticamente por nombre
server.get("/libros/3siguientes", async (req, res) => {
  let sql = `SELECT * FROM libros
            ORDER BY titulo ASC
            LIMIT 3
            OFFSET 3;`;
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql);
  res.status(200).json(results);
  connection.end();
});

// not found error
server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
