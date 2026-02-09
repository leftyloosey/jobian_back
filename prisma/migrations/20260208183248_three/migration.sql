-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_collectionId_fkey";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
