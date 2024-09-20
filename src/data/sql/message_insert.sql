CREATE TABLE IF NOT EXISTS `message` (
    `message_id` INT,
    `user_id` INT,
    `offer_id` INT,
    `msg_time` VARCHAR(26) CHARACTER SET utf8,
    `msg_contents` VARCHAR(73) CHARACTER SET utf8,
    `msg_is_auto` INT
);
INSERT INTO `message` VALUES (1,2,1,'2024-09-15 10:01:00','Offeror has created new offer.',1),
	(2,3,1,'2024-09-15 10:02:00','Can you add more assets? I think just bed and fish is not enough.',0),
	(3,2,1,'2024-09-15 10:03:00','Sure my friend.',0),
	(4,2,1,'2024-09-15 10:04:00','Offeror has updated offer asset.',1),
	(5,3,1,'2024-09-15 10:04:59.995000','Swaper has accepted offer.',1),
	(6,3,1,'2024-09-15 10:05:59.995000','I will ship on this friday.',0),
	(7,2,1,'2024-09-15 10:07:00','No problem, i will ship it today.',0),
	(8,2,2,'2024-09-15 10:07:59.995000','Offeror create new offer.',1),
	(9,4,2,'2024-09-15 10:08:59.995000','Swaper has updated offer.',1),
	(10,2,2,'2024-09-15 10:09:59.995000','Offeror has accepted offer.',1),
	(11,2,3,'2024-09-15 10:10:59.995000','Offeror create new offer.',1),
	(12,5,3,'2024-09-15 10:11:59.995000','Swaper has updated offer.',1),
	(13,2,3,'2024-09-15 10:12:59.995000','Offeror has rejected  offer as some asset was matched with another offer.',1),
	(14,5,4,'2024-09-15 10:13:59.995000','Offeror create new offer.',1);
