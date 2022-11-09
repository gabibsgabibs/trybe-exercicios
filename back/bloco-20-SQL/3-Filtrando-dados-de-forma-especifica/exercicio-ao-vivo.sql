-- Selecionar nomes que tem REY em qualquer posição da string
SELECT * FROM sakila.actor WHERE first_name LIKE '%REY%'

-- Selecionar nomes finalizam com BRA
SELECT * FROM sakila.actor WHERE first_name LIKE '%BRA'

-- Selecionar nomes iniciam com JUN
SELECT * FROM sakila.actor WHERE first_name LIKE 'JUN%'

-- Selecionar nomes iniciam com J e terminam com E
SELECT * FROM sakila.actor WHERE first_name LIKE 'J%E'

-- Selecionar nomes iniciam com RA a partir da segunda letra
SELECT * FROM sakila.actor WHERE first_name LIKE '_RA%'

-- Selecionar nomes iniciam com ME a partir da terceira letra
SELECT * FROM sakila.actor WHERE first_name LIKE '__ME%'

-- Selecionar nomes com 3 caracteres
SELECT * FROM sakila.actor WHERE first_name LIKE '___'

-- Selecionar nomes com 3 caracteres que iniciam com B
SELECT * FROM sakila.actor WHERE first_name LIKE 'B__'