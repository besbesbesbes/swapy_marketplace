CREATE TABLE IF NOT EXISTS `shipping` (
    `shipping_id` INT,
    `asset_id` INT,
    `shipping_side` VARCHAR(1) CHARACTER SET utf8,
    `shipping_address` VARCHAR(17) CHARACTER SET utf8
);
INSERT INTO `shipping` VALUES (1,131,'o','Pattaya, Thailand'),
	(2,137,'o','Pattaya, Thailand'),
	(3,140,'o','Pattaya, Thailand'),
	(4,13,'s','Phuket, Thailand');
