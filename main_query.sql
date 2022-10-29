CREATE DATABASE IF NOT EXISTS desafiomonitoria DEFAULT CHARACTER SET utf8;

use desafiomonitoria;

CREATE TABLE IF NOT EXISTS monitorias (
	id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
    turma TINYINT(1) UNSIGNED NOT NULL,
    monitor VARCHAR(45) NOT NULL,
    aluno VARCHAR(45) NOT NULL,
    trilha VARCHAR(45) NOT NULL,
    ot INT(2) UNSIGNED NOT NULL,
    datamonitoria DATE NOT NULL,
    concluida TINYINT(1) UNSIGNED,
    PRIMARY KEY(id)
);

INSERT INTO `monitorias` VALUES (
	1,
    1,
    'Matheus Vicenzi',
    'Fulano',
    'POO',
    10,
    '2022-10-21',
    1
);

SELECT * FROM `monitorias`;

ALTER TABLE `monitorias` MODIFY `datamonitoria` DATE NULL;