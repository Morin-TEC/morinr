CREATE DATABASE [19100222];
USE [19100222];

CREATE TABLE videojuego (
  ID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
  inputTituloVideojuego varchar(30) NOT NULL,
  Genero varchar(30) NOT NULL,
  inputPrecio varchar(30) NOT NULL,
  Fecha varchar(30) NOT NULL,
);

INSERT INTO videojuego VALUES (
  2,'Minecraft','Sandbox',1000,'2 de Octubre del 2009' 
);

INSERT INTO videojuego VALUES (
  4,'Call of Duty: Vanguard','Shooter',1400,'22 de Octubre del 2021' 
);

INSERT INTO videojuego VALUES (
  9,'Spiderman','Accion',700,'4 de Abril del 2019' 
);

INSERT INTO videojuego VALUES (
  6,'Mario 3D World','Plataformas',500,'22 de Noviembre del 2014' 
);

INSERT INTO videojuego VALUES (
  8,'Splatoon 2','Shooter',1000,'30 de Mayo del 2019' 
);
