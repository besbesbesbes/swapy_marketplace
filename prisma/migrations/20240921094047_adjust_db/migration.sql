-- CreateTable
CREATE TABLE `offer_asset` (
    `offer_asset_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `offer_id` INTEGER NOT NULL,
    `asset_id` INTEGER NOT NULL,

    PRIMARY KEY (`offer_asset_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `offer_asset` ADD CONSTRAINT `offer_asset_offer_id_fkey` FOREIGN KEY (`offer_id`) REFERENCES `Offers`(`offer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer_asset` ADD CONSTRAINT `offer_asset_asset_id_fkey` FOREIGN KEY (`asset_id`) REFERENCES `Assets`(`asset_id`) ON DELETE CASCADE ON UPDATE CASCADE;
