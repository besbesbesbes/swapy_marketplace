-- Disable foreign key checks
SET FOREIGN_KEY_CHECKS = 0;

-- Truncate the table
TRUNCATE TABLE users;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;