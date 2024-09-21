-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `user_display_name` VARCHAR(191) NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `user_bio` VARCHAR(191) NULL,
    `user_profile_pic` VARCHAR(191) NULL,
    `user_rating` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `user_rating_count` INTEGER NOT NULL DEFAULT 0,
    `user_location` VARCHAR(191) NULL,
    `user_address` VARCHAR(191) NULL,
    `user_is_ready` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Users_user_name_key`(`user_name`),
    UNIQUE INDEX `Users_user_email_key`(`user_email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assets` (
    `asset_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `asset_name` VARCHAR(191) NOT NULL,
    `asset_category` VARCHAR(191) NOT NULL,
    `asset_brand` VARCHAR(191) NULL,
    `asset_condition` VARCHAR(191) NOT NULL,
    `asset_note` VARCHAR(191) NULL,
    `asset_thumbnail` VARCHAR(191) NOT NULL,
    `asset_status` VARCHAR(191) NOT NULL DEFAULT 'ready',
    `asset_offeror_count` INTEGER NOT NULL DEFAULT 0,
    `asset_swaper_count` INTEGER NOT NULL DEFAULT 0,
    `asset_is_ready` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`asset_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Assets` ADD CONSTRAINT `Assets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
