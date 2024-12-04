CREATE DATABASE games;
USE games;

CREATE TABLE country (
	idCountry INT AUTO_INCREMENT PRIMARY KEY,
    nameCountry VARCHAR(50)
);

CREATE TABLE users (
	idUser INT AUTO_INCREMENT PRIMARY KEY,
    nameUser VARCHAR(20) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    fk_country INT,
    CONSTRAINT fk_country_user FOREIGN KEY (fk_country) REFERENCES country(idCountry)
);

CREATE DATABASE canciones;
USE canciones;

CREATE TABLE album (
	idAlbum INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    year DATE
);

CREATE TABLE song (
	idSong INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    fk_album INT,
    CONSTRAINT fk_album_song FOREIGN KEY (fk_album) REFERENCES album(idAlbum)
);

CREATE TABLE artist (
	idArtist INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    lastName VARCHAR(45),
    nationality VARCHAR(45) 
);

CREATE TABLE artist_song (
	idArtist_song VARCHAR(45),
    fk_artist INT,
    CONSTRAINT fk_artist_song FOREIGN KEY (fk_artist) REFERENCES artist(idArtist),
    fk_song INT,
    CONSTRAINT fk_song_artist FOREIGN KEY (fk_song) REFERENCES song(idSong)
);