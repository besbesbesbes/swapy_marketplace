/*
  Warnings:

  - You are about to drop the column `asset_thumbnail` on the `Assets` table. All the data in the column will be lost.
  - Added the required column `asset_thum` to the `Assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Assets` DROP COLUMN `asset_thumbnail`,
    ADD COLUMN `asset_thum` VARCHAR(191) NOT NULL,
    MODIFY `asset_note` VARCHAR(1000) NULL;

-- CreateTable
CREATE TABLE `Asset_Pic` (
    `asset_pic_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `asset_pic` VARCHAR(1000) NOT NULL,
    `asset_id` INTEGER NOT NULL,
    `is_thumbnail` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`asset_pic_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Asset_Pic` ADD CONSTRAINT `Asset_Pic_asset_id_fkey` FOREIGN KEY (`asset_id`) REFERENCES `Assets`(`asset_id`) ON DELETE CASCADE ON UPDATE CASCADE;
