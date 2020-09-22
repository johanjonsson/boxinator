CREATE TABLE `boxes` (
  `box_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `weight` double NOT NULL,
  `color` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `shipping_cost` double NOT NULL,
  PRIMARY KEY (`box_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='Table containing all added boxes';
