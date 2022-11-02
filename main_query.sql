CREATE DATABASE IF NOT EXISTS desafiomonitoria DEFAULT CHARACTER SET utf8;

use desafiomonitoria;

CREATE TABLE IF NOT EXISTS monitorias (
	id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
    turma TINYINT(1) UNSIGNED NOT NULL,
    monitor VARCHAR(45) NOT NULL,
    aluno VARCHAR(45) NOT NULL,
    obs VARCHAR(255) NOT NULL,
    datamonitoria DATE NOT NULL,
    concluida TINYINT(1) UNSIGNED,
    PRIMARY KEY(id)
);

INSERT INTO `monitorias` VALUES (
	NULL,
    2,
    'Matheus Vicenzi',
    'Ful',
    '2022-10-22',
    1,
    'Teste'
);

SELECT * FROM `monitorias`;

DELETE FROM monitorias WHERE monitorias.id > 1;

ALTER TABLE `monitorias` MODIFY `datamonitoria` DATE NOT NULL;

ALTER TABLE `monitorias` DROP COLUMN `ot`;

ALTER TABLE `monitorias`
ADD COLUMN `obs` VARCHAR(255) NOT NULL; 