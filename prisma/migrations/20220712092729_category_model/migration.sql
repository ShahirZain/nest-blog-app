-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "createAd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
