-- CreateTable
CREATE TABLE "Project" (
                           "id" SERIAL NOT NULL,
                           "uuid" TEXT NOT NULL,
                           "name" TEXT NOT NULL,
                           "price" INTEGER NOT NULL,

                           CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_uuid_key" ON "Project"("uuid");
