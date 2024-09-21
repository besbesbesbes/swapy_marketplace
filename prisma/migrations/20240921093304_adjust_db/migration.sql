-- CreateTable
CREATE TABLE `Offers` (
    `offer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `offer_name` VARCHAR(191) NOT NULL,
    `offeror_id` INTEGER NOT NULL,
    `swaper_id` INTEGER NOT NULL,
    `offer_status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`offer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Offers` ADD CONSTRAINT `Offers_offeror_id_fkey` FOREIGN KEY (`offeror_id`) REFERENCES `Users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Offers` ADD CONSTRAINT `Offers_swaper_id_fkey` FOREIGN KEY (`swaper_id`) REFERENCES `Users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
