-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: desafiomonitoria
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `monitorias`
--

DROP TABLE IF EXISTS `monitorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monitorias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `aluno` varchar(45) NOT NULL,
  `turma` tinyint unsigned NOT NULL,
  `monitor` varchar(45) NOT NULL,
  `datamonitoria` date NOT NULL,
  `concluida` tinyint unsigned DEFAULT NULL,
  `obs` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitorias`
--

LOCK TABLES `monitorias` WRITE;
/*!40000 ALTER TABLE `monitorias` DISABLE KEYS */;
INSERT INTO `monitorias` VALUES (47,'ABC',3,'Fulano','2022-10-20',0,'Lorem ipsum dolor'),(48,'ABC',3,'Fulano','2022-10-20',0,'Lorem ipsum dolor'),(49,'ABC',3,'Fulano','2022-10-20',0,'Lorem ipsum dolor'),(50,'CBA',1,'Fulano','2022-08-20',2,'Lorem ipsum dolor'),(51,'CBA',1,'Fulano','2022-08-20',2,'Lorem ipsum dolor'),(52,'CBA',1,'Fulano','2022-08-20',2,'Lorem ipsum dolor'),(53,'CBA',1,'Fulano','2022-08-20',2,'Lorem ipsum dolor'),(54,'CBA',1,'Fulano','2022-08-20',1,'Lorem ipsum dolor'),(55,'CBA',1,'Fulano','2022-08-20',1,'Lorem ipsum dolor'),(56,'CBA',1,'Fulano','2022-08-20',1,'Lorem ipsum dolor'),(57,'CBA',1,'Fulano','2022-08-20',1,'Lorem ipsum dolor'),(58,'CBA',1,'Fulano','2022-08-20',0,'Lorem ipsum dolor'),(59,'CBA',1,'Fulano','2022-08-20',0,'Lorem ipsum dolor'),(60,'CBA',1,'Fulano','2022-08-20',0,'Lorem ipsum dolor'),(61,'CBA',1,'Fulano','2022-08-20',0,'Lorem ipsum dolor');
/*!40000 ALTER TABLE `monitorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'desafiomonitoria'
--

--
-- Dumping routines for database 'desafiomonitoria'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 21:49:28
