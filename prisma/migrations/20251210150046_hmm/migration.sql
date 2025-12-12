/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `ministryId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Ministry" ALTER COLUMN "published" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
ADD COLUMN     "ministryId" INTEGER NOT NULL,
ADD COLUMN     "modified" TIMESTAMP(3),
ALTER COLUMN "published" SET DEFAULT true;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
