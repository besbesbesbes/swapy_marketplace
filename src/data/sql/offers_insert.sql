CREATE TABLE IF NOT EXISTS `offers` (
    `offer_id` INT,
    `offer_name` VARCHAR(15) CHARACTER SET utf8,
    `offeror_id` INT,
    `swaper_id` INT,
    `offer_status` VARCHAR(8) CHARACTER SET utf8
);
INSERT INTO `offers` VALUES (1,'Won*an & Bru*ne',2,3,'created'),
	(2,'Pet*er & Won*an',2,4,'accepted'),
	(3,'Ton*rk & Pet*er',2,5,'rejected'),
	(4,'Cla*nt & Ton*rk',5,2,'created');
