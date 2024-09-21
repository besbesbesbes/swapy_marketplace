/*
  Warnings:

  - You are about to drop the column `asset_thum` on the `Assets` table. All the data in the column will be lost.
  - Added the required column `asset_thumnail` to the `Assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Assets` DROP COLUMN `asset_thum`,
    ADD COLUMN `asset_thumnail` VARCHAR(191) NOT NULL;
