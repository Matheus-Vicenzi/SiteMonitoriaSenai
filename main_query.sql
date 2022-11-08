CREATE DATABASE IF NOT EXISTS desafiomonitoria DEFAULT CHARACTER SET utf8;

use desafiomonitoria;

CREATE TABLE IF NOT EXISTS monitorias (
	id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
	aluno VARCHAR(45) NOT NULL,
    turma TINYINT(1) UNSIGNED NOT NULL,
    monitor VARCHAR(45) NOT NULL,
    datamonitoria DATE NOT NULL,
    concluida TINYINT(1) UNSIGNED,
    obs VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO `monitorias` VALUES (
	NULL,
    'Ciclano',
    2,
    'Fulano',
    '2022-10-22',
    1,
    'Lorem ipsum dolor'
);

SELECT * FROM `monitorias`;

DELETE FROM monitorias WHERE monitorias.id >= 1;

ALTER TABLE `monitorias` MODIFY `datamonitoria` DATE NOT NULL;

ALTER TABLE `monitorias` DROP COLUMN `ot`;

ALTER TABLE `monitorias`
ADD COLUMN `obs` VARCHAR(255) NOT NULL;