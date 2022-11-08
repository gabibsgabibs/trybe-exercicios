-- 1.Entre no banco de dados mysql.
mysql -u root -p

-- 2.Visualize todas as tabelas desse banco.
USE nome_do_banco_de_dados_aqui;
SHOW TABLES;

-- 3.Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada. 
DESCRIBE nome_da_tabela;

-- 4.Crie um novo banco de dados com o seu nome e depois entre nele!
CREATE DATABASE nome_aqui;
USE nome_aqui;