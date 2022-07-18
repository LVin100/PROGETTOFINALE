CREATE DATABASE  IF NOT EXISTS `cleanocean` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cleanocean`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: cleanocean
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `kg` decimal(10,0) NOT NULL,
  `id_seller` int(11) NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mela',1,4,5,97),(2,'Tilesius\' Wormwood',45,4,6974,2),(3,'Big Apple',1511,1,1621,211),(4,'Indian Cucumber',46,10,6243,2),(5,'Chinese Knotweed',50,18,8625,2),(6,'Horehound',57,7,3398,2),(7,'Sandcarpet',62,9,2060,2),(8,'Western Mountain Aster',99,16,7840,2),(9,'Dudleya',7,3,391,2),(10,'Barneby\'s Serpentweed',64,20,7817,2),(11,'Orange Lichen',61,14,2567,2),(12,'Shortleaf Blazing Star',47,18,6232,2),(13,'Yerba Linda',78,5,5005,2),(14,'Florida Keys Ladies\'-tresses',58,7,7439,2),(15,'Pearlflower',91,12,440,2),(16,'BlankeOnion tflower',12000000,10,0,299),(17,'Tetracarpidium',75,20,9897,2),(18,'Fries\' Pussytoes',44,2,5875,2),(19,'Annual Fescue',12,18,8191,2),(20,'Edwards Plateau Spiderwort',41,7,837,2),(21,'Map Lichen',47,5,4995,2),(22,'Dwarf Mountain Ragwort',69,13,6935,2),(23,'Sand Sagebrush',35,5,7412,2),(24,'Slenderleaf False Foxglove',88,6,5581,2),(25,'Limestone Adderstongue',40,14,142,2),(26,'Florida Wild Indigo',99,7,977,2),(27,'Mason\'s Ceanothus',67,3,5279,2),(28,'Hall\'s Fleabane',50,20,366,2),(29,'Bedstraw',7,8,9613,2),(30,'Flat-top Mille Graines',6,7,6943,2),(31,'Little Goblin Moonwort',94,5,5341,2),(32,'Two-wing Silverbell',53,15,4599,2),(33,'Porcupine River Thimbleweed',160,2,8456,2),(34,'Arizona Lupine',97,12,2257,2),(35,'Sweet Osmanthus',35,18,522,2),(36,'Laurel',29,8,1476,2),(37,'Annual Trampweed',76,11,1383,2),(38,'Black Hawthorn',33,6,6747,2),(39,'Cliff Desertdandelion',94,1,9459,2),(40,'Lookout Mountain Blackberry',71,3,8702,2),(41,'Oak',13,17,935,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id_vendita` int(11) NOT NULL AUTO_INCREMENT,
  `id_buyer` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_seller` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id_vendita`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,4,3,5,1),(4,12,11,20,1),(5,8,27,20,2),(6,16,10,3,2),(7,8,29,20,1),(13,20,14,16,1),(14,13,36,8,2),(27,1,1,4,3),(28,1,1,4,3),(31,1,18,2,2),(32,1,16,10,2);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Holdlamis','Jeggo','kjeggo0@pen.io','P7H4BwGtF5qa'),(2,'Mat Lam Tam','Imbrey','dimbrey1@senate.gov','qTku4SNonYs'),(3,'Zontrax','Mayler','mmayler2@gmpg.org','w8igc6WeSU6'),(4,'Rank','Biddleston','abiddleston3@myspace.com','Y9lLBqn'),(5,'Namfix','Eymor','leymor4@unc.edu','bKwVK0E4oY'),(6,'Prodder','Arnaez','marnaez5@cisco.com','gcS3nHHDXJH'),(7,'Voltsillam','Trustrie','rtrustrie6@mashable.com','XZyXOht7X9'),(8,'Regrant','Playle','gplayle7@bluehost.com','UZV9Lx'),(9,'Bitwolf','Achrameev','bachrameev8@last.fm','5GoKwZxESE'),(10,'Latlux','Roden','broden9@about.com','rIigFFPh'),(11,'Fintone','Amber','mambera@typepad.com','XQRKiYqBk5'),(12,'Transcof','Cradduck','ocradduckb@artisteer.com','ZsSfQORxa'),(13,'Zaam-Dox','St Ange','ostangec@businessinsider.com','ZgAOmlzhLYU'),(14,'Stim','Catherick','jcatherickd@ifeng.com','ZoBSelriC'),(15,'Fixflex','Stainer','lstainere@cpanel.net','QVu2Wp'),(16,'Solarbreeze','MacCoughen','pmaccoughenf@blog.com','Yu9ZoqJ'),(17,'Fix San','Enticknap','kenticknapg@wisc.edu','0aqIZuM'),(18,'Quo Lux','Roycroft','groycrofth@lulu.com','igPgSfEPJX9h'),(19,'Konklux','Ferreres','aferreresi@dmoz.org','tKNWszZAM'),(20,'Toughjoyfax','Owlner','cowlnerj@tumblr.com','URthzgw4'),(21,'Oak','White','oak.white@email.con','P4ssw0rd!'),(22,'Marco','Polo','marco.polo@libero.it','prova1'),(23,'Marcolino','Paolino','marcolino.paololino@libero.it','prova2'),(24,'Jhon','White','j.w@gmail.com','prova3'),(25,'pippo','asdf','pippo.pippo@pippo.it','pippo1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-18  9:42:17
