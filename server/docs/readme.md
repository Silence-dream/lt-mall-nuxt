## 分类表

```sql
-- letao.category definition  一级分类

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,    
  `categoryName` varchar(50) DEFAULT null,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert  into `category`(`id`,`categoryName`) values (1,'运动馆'),(2,'女士馆'),(3,'男士馆'),(4,'帆布馆'),(5,'户外管');

   CREATE TABLE `brand` (
     `id` int(11) NOT NULL AUTO_INCREMENT,
     `brandName` varchar(50) DEFAULT NULL,
     `categoryId` int(11) DEFAULT NULL,
     `brandLogo` varchar(200) DEFAULT NULL,
     `hot` int(4) DEFAULT NULL,
     PRIMARY KEY (`id`)
   ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
   
insert  into `brand`(`id`,`brandName`,`categoryId`,`brandLogo`,`hot`) values (1,'耐克',1,'/images/brand1.png',1),(2,'阿迪',1,'/images/brand2.png',1),(3,'新百伦',1,'/images/brand3.png',1),(4,'哥伦比亚',1,'/images/brand4.png',0),(5,'匡威',1,'/images/brand5.png',1),(6,'阿萨德1',2,'/images/brand5.png',1),(7,'阿萨德2',2,'/images/brand5.png',1);
```