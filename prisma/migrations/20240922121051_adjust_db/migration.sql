/*
  Warnings:

  - Made the column `user_profile_pic` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `user_profile_pic` VARCHAR(191) NOT NULL DEFAULT '../pics/user-pic-default.png';
