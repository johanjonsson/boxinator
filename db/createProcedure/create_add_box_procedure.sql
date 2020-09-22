DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_box`(
IN in_name varchar(45),
IN in_weight double,
IN in_color varchar(45),
IN in_country varchar(45),
IN in_shipping_cost double
)
BEGIN
INSERT INTO boxes (name,
weight,
color,
country,
shipping_cost)
VALUES(in_name,
in_weight,
in_color,
in_country,
in_shipping_cost
);
END$$
DELIMITER ;
