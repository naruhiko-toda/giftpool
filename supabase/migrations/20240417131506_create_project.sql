-- CreateTable
CREATE TABLE "Project"
(
    "id"    uuid    NOT NULL DEFAULT gen_random_uuid(),
    "name"  TEXT    NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
