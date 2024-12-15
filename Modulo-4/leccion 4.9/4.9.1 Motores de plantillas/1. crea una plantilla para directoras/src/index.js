const express = require("express");
const cors = require("cors");
const films = require("./films-data.json");
const directoras = require("./directors-data.json");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set("view engine", "ejs");

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get("/es/film:filmId.html", (req, res) => {
  // get film data
  const filmData = films.find((film) => film.id === req.params.filmId);
  console.log("film data", filmData);

  // response with rendered template
  if (filmData) {
    res.render("pages/film", filmData);
  } else {
    res.render("pages/film-not-found");
  }
});

app.get("/es/directora/:directoraId", (req, res) => {
  const directoraData = directoras.find(
    (directora) => directora.nombre === req.params.directoraId
  );

  if (directoraData) {
    directoraData.nombre = directoraData.nombre || "";

    directoraData.edad = directoraData.edad || "";

    directoraData.nacionalidad = directoraData.nacionalidad || "";

    directoraData.peliculas = directoraData.peliculas || [];

    directoraData.premios = directoraData.premios || [];

    res.render("pages/directora", directoraData);
  } else {
    res.render("pages/film-not-found");
  }
});
