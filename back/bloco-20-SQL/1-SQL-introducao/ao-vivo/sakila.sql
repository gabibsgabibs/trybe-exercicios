SELECT * FROM sakila.adress; 
-- seleciona tudo da tabela address do banco sakila

SELECT * FROM sakila.city WHERE city_id = 300;
-- seleciona todos os registros que tenham o city_id igual a 300

DELETE FROM sakila.city WHERE city_id = 300;
-- tenta deletar os registros com o city_id igual a 300, porém da erro porque há uma chave estrangeira ligada ao id

