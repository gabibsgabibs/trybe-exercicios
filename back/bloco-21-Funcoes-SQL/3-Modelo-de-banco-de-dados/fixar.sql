-- Exercício: Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são: Nome, Espécie, Sexo, Idade, Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE Animal(
  id_animal INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo VARCHAR(50) NOT NULL,
  idade INT NOT NULL,
  localização VARCHAR(100) NOT NULL,
);

CREATE TABLE Funcionário(
  id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  id_gerente INT NOT NULL,
  FOREIGN KEY (id_gerente) REFERENCES Gerente (id_gerente)
);

CREATE TABLE Gerente(
  id_gerente INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
);

CREATE TABLE Cuidador(
  id_animal INT NOT NULL,
  id_funcionario INT NOT NULL,
  CONSTRAINT PRIMARY KEY(id_animal, id_funcionario),
  FOREIGN KEY (id_animal) REFERENCES Animal (id_animal),
  FOREIGN KEY (id_funcionario) REFERENCES Funcionário (id_funcionario)
);