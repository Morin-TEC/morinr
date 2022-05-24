CREATE DATABASE [19100222];
USE [19100222];

CREATE TABLE videojuego (
  ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
  inputTituloVideojuego varchar(30) NOT NULL,
  Genero varchar(30) NOT NULL,
  inputPrecio varchar(30) NOT NULL,
  Fecha varchar(30) NOT NULL,
);
