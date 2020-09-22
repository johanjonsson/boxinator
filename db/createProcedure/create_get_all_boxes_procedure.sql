DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_boxes`()
BEGIN
SELECT * FROM boxes;
END$$
DELIMITER ;
