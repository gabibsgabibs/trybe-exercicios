USE pixar;

-- Exercício 1: Insira as produções da Pixar na tabela movies:
INSERT INTO movies(title, director, year, length_minutes)
VALUES('Monstros SA', 'Pete Docter', 2001, 92),
      ('Procurando Nemo', 'John Lasseter', 2003, 107),
      ('Os Incríveis', 'Brad Bird', 2004, 116),
      ('WALL-E', 'Pete Docter', 2008, 104);

-- Exercício 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.
INSERT INTO box_office(rating, domestic_sales, international_sales)
VALUES(6.8, 450000000, 370000000);

-- Exercício 3: O diretor do filme “Procurando Nemo” está incorreto, na verdade ele foi dirigido por “Andrew Stanton”. Corrija esse dado utilizando o UPDATE.
UPDATE movies SET director = 'Andrew Stanton' WHERE movie_id = 9;

-- Exercício 4: O título do filme “Ratatouille” está escrito de forma incorreta na tabela movies, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE.
UPDATE movies SET title = 'Ratatouille', year = 2007 
WHERE movie_id = 3;

-- Exercício 5: Insira as novas classificações na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies.
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
VALUES(8, 8.5, 300000000, 250000000), --Monstros SA
      (10, 7.4, 460000000, 510000000), --Os incríveis
      (11, 9.9, 290000000, 280000000); --WAAL-E

-- Exercício 6: Exclua da tabela movies o filme “WALL-E”. P.S.: Lembrando que existe uma relação de Primary key-Foreign Key, portanto devemos excluir primeiro a referência da tabela box_office, para depois excluir da tabela movies.
DELETE FROM box_office WHERE movie_id = 11;
DELETE FROM movies WHERE title = 'WALL-E';

-- Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
DELETE FROM box_office WHERE movie_id IN (2, 9);
DELETE FROM movies WHERE director = 'Andrew Stanton';