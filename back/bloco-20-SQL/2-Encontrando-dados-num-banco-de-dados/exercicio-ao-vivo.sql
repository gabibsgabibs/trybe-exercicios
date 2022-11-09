USE sakila;
-- seta qual banco está sendo usado

SELECT DISTINCT first_name FROM actor;
-- retorna a lista sem resultados repetidos

SELECT DISTINCT first_name, last_name FROM actor;
-- retorna a lista sem resultados repetidos, mas nesse caso com 2 colunas juntas

SELECT * FROM country LIMIT 5;
-- retorna os primeiros 5 resultados

SELECT * FROM country LIMIT 7 OFFSET 10;
-- ignora os primeiros 10 resultados e retorna os próximos 7

SELECT COUNT(address) FROM address;
-- retorna a quantidade de resultados da coluna (não conta valores nulos)

SELECT COUNT(city_id) AS qtd_cidade, COUNT(district) AS qtd_distritos FROM address;
--retorna 2 resultados e o AS renomeia o retorno

SELECT district, COUNT(*) AS quant FROM address WHERE district = 'California';
-- retorna a quantidade de distritos com o nome de california e renomeia o retorno para quant

SELECT district, COUNT(*) AS quant FROM address GROUP BY district;
-- retorna os distritos e agrupa pelo nome. ex: Buenos Aires - 10

SELECT * FROM actor ORDER BY first_name ASC, last_name ASC;
-- ASC é ordem ascendente, DESC é decrescente

SELECT * FROM 