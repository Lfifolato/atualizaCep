-- CreateTable
CREATE TABLE `BaseCep` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CepApi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NULL,
    `address_type` VARCHAR(191) NULL,
    `address_name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `district` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `city_ibge` VARCHAR(191) NULL,
    `ddd` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `error` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
