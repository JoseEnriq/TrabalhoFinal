-- CreateTable
CREATE TABLE `Categoria` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `valorLocacao` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
