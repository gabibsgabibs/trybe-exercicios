-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT movies.title, sales.domestic_sales, sales.international_sales
FROM pixar.movies AS movies
INNER JOIN pixar.box_office AS sales
ON movies.id = sales.movie_id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT movies.title, sales.domestic_sales + sales.international_sales AS 'Vendas'
FROM pixar.movies AS movies
INNER JOIN pixar.box_office AS sales
ON movies.id = sales.movie_id;
WHERE sales.international_sales > sales.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT movies.title, sales.rating
FROM pixar.movies AS movies
INNER JOIN pixar.box_office AS sales
ON movies.id = sales.movie_id
ORDER BY sales.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT *
FROM pixar.theater AS cinemas
LEFT JOIN pixar.movies AS filmes
ON cinemas.id = filmes.theater_id
ORDER BY cinemas.name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT *
FROM pixar.theater AS cinemas
RIGHT JOIN pixar.movies AS filmes
ON cinemas.id = filmes.theater_id
ORDER BY cinemas.name ASC;